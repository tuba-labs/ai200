"""Exercise the new local behavior without Azure resources or credentials."""
import importlib.util
import json
import os
from pathlib import Path
import socket
import sqlite3
import subprocess
import sys
import tempfile
import time
import unittest
import urllib.error
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("new_cache_aside", ROOT / "workshops/labs/redis/cache_aside.py")
cache_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(cache_module)


class Source:
    def __init__(self):
        self.connection = sqlite3.connect(":memory:")
        self.connection.execute("CREATE TABLE workshop_notes (id INTEGER PRIMARY KEY, content TEXT)")
        self.connection.execute("INSERT INTO workshop_notes VALUES (1, 'Original')")
        self.connection.commit()
        self.reads = 0

    def execute(self, query, values):
        if query.startswith("SELECT"):
            self.reads += 1
        return self.connection.execute(query.replace("%s", "?"), values)

    def commit(self):
        self.connection.commit()


class Cache:
    def __init__(self):
        self.values = {}

    def get(self, key):
        return self.values.get(key)

    def set(self, key, value, ex):
        self.values[key] = value

    def delete(self, key):
        self.values.pop(key, None)


class CacheAsideTests(unittest.TestCase):
    def test_hit_avoids_source_and_update_invalidates_the_old_value(self):
        source, cache = Source(), Cache()
        self.addCleanup(source.connection.close)
        self.assertEqual(cache_module.read_document(cache, source, 1), ("Original", "miss"))
        self.assertEqual(cache_module.read_document(cache, source, 1), ("Original", "hit"))
        self.assertEqual(source.reads, 1)
        cache_module.update_document(cache, source, 1, "Updated")
        self.assertEqual(cache_module.read_document(cache, source, 1), ("Updated", "miss"))
        self.assertEqual(source.reads, 2)

    def test_missing_document_does_not_fill_or_remove_another_cache_entry(self):
        source, cache = Source(), Cache()
        self.addCleanup(source.connection.close)
        cache.values["unrelated"] = "keep"
        with self.assertRaises(LookupError):
            cache_module.read_document(cache, source, 900)
        with self.assertRaises(LookupError):
            cache_module.update_document(cache, source, 900, "Absent")
        self.assertEqual(cache.values, {"unrelated": "keep"})


def have_functions_sdk():
    try:
        return importlib.util.find_spec("azure.functions") is not None
    except ModuleNotFoundError:
        return False


@unittest.skipUnless(have_functions_sdk(), "Install workshop requirements to test real Function objects")
class BackgroundFunctionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        spec = importlib.util.spec_from_file_location("new_functions", ROOT / "workshops/labs/integrations/function_app.py")
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        cls.functions = {function.get_function_name(): function.get_user_function() for function in module.app.get_functions()}

    def test_enqueue_accepts_work_and_populates_the_output_binding(self):
        import azure.functions as func
        output = type("Output", (), {"set": lambda self, value: setattr(self, "value", value)})()
        request = func.HttpRequest(method="POST", url="http://localhost/api/enqueue", body=b'{"id":"document-1"}')
        response = self.functions["enqueue"](request, output)
        self.assertEqual(response.status_code, 202)
        self.assertEqual(output.value, '{"id":"document-1"}')

    def test_failed_background_work_propagates_to_the_host(self):
        message = type("Message", (), {"get_body": lambda self: b'{"id":"fail-demo"}', "id": "failure-1"})()
        with self.assertRaisesRegex(ValueError, "Controlled Storage queue"):
            self.functions["background"](message)


def port():
    with socket.socket() as listener:
        listener.bind(("127.0.0.1", 0))
        return listener.getsockname()[1]


def have_tracing_sdk():
    try:
        return importlib.util.find_spec("opentelemetry.sdk") is not None
    except ModuleNotFoundError:
        return False


@unittest.skipUnless(have_tracing_sdk(), "Install workshop requirements to test real tracing")
class TraceFlowTests(unittest.TestCase):
    def test_one_trace_crosses_two_real_processes_and_captures_a_backend_failure(self):
        processes = []
        environment = dict(os.environ)
        environment.pop("APPLICATIONINSIGHTS_CONNECTION_STRING", None)
        service = ROOT / "workshops/labs/observability/services.py"
        backend_port, frontend_port = port(), port()
        with tempfile.TemporaryDirectory() as temp:
            handles = []
            try:
                for role, selected in (("backend", backend_port), ("frontend", frontend_port)):
                    log = open(Path(temp) / f"{role}.log", "w", encoding="utf-8")
                    handles.append(log)
                    process = subprocess.Popen([sys.executable, str(service), role, "--port", str(selected),
                        "--backend-url", f"http://127.0.0.1:{backend_port}/lookup", "--sampler", "all"],
                        stdout=log, stderr=subprocess.STDOUT, env=environment)
                    processes.append(process)
                    for _ in range(100):
                        if process.poll() is not None:
                            self.fail(f"{role} terminated; see {log.name}")
                        try:
                            with socket.create_connection(("127.0.0.1", selected), timeout=.1):
                                break
                        except OSError:
                            time.sleep(.05)
                    else:
                        self.fail(f"{role} never listened")
                with urllib.request.urlopen(f"http://127.0.0.1:{frontend_port}/search", timeout=5) as response:
                    result = json.load(response)
                self.assertEqual(result["status"], 200)
                self.assertRegex(result["trace_id"], r"^[a-f0-9]{32}$")
                with self.assertRaises(urllib.error.HTTPError) as failure:
                    urllib.request.urlopen(f"http://127.0.0.1:{frontend_port}/search?fail=1", timeout=5)
                self.assertEqual(failure.exception.code, 500)
                failure.exception.close()
            finally:
                for process in processes:
                    process.terminate()
                for process in processes:
                    process.wait(timeout=10)
                for handle in handles:
                    handle.close()
            for role in ("frontend", "backend"):
                text = (Path(temp) / f"{role}.log").read_text(encoding="utf-8")
                self.assertIn(f"role={role} trace_id={result['trace_id']} status=200", text)
                self.assertIn('"status_code": "ERROR"', text)


if __name__ == "__main__":
    unittest.main()
