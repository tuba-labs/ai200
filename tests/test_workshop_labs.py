"""Behavior checks that run without Azure credentials or provisioned resources."""
import importlib.util
import json
import os
from pathlib import Path
import re
import socket
import subprocess
import sys
import tempfile
import time
from types import SimpleNamespace
import unittest
import urllib.error
import urllib.request
from unittest.mock import patch

import azure.functions as func

ROOT = Path(__file__).resolve().parents[1]


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, ROOT / path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def functions(module):
    return {f.get_function_name(): f.get_user_function() for f in module.app.get_functions()}


def request(body):
    return func.HttpRequest(method="POST", url="http://localhost/", headers={
        "Content-Type": "application/json"}, body=json.dumps(body).encode())


class FunctionBehaviorTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.api_module = load_module("workshop_api", "labs/integrations/function_app.py")
        cls.api = functions(cls.api_module)
        cls.binding_module = load_module("workshop_binding", "labs/bindings/function_app.py")
        cls.bindings = functions(cls.binding_module)

    def test_duplicate_and_invalid_document(self):
        self.api_module.processed.clear()
        handler = self.api["documents"]
        self.assertTrue(json.loads(handler(request({"id": "test"})).get_body())["processed"])
        self.assertFalse(json.loads(handler(request({"id": "test"})).get_body())["processed"])
        self.assertEqual(400, handler(request({})).status_code)
        self.assertEqual(400, handler(request([])).status_code)

    def test_event_grid_validation_and_retry_response(self):
        handler = self.api["event_hook"]
        validation = [{"eventType": "Microsoft.EventGrid.SubscriptionValidationEvent",
                       "data": {"validationCode": "test-code"}}]
        with patch.dict(os.environ, {"FAIL_EVENTS": "true"}):
            response = handler(request(validation))
            self.assertEqual({"validationResponse": "test-code"}, json.loads(response.get_body()))
            self.assertEqual(503, handler(request([{"id": "e1"}])).status_code)
        with patch.dict(os.environ, {"FAIL_EVENTS": "false"}):
            self.assertEqual(200, handler(request([{"id": "e1"}])).status_code)

    def test_output_binding_forwards_body_and_consumer_fails_deliberately(self):
        class Output:
            def set(self, value):
                self.value = value
        output = Output()
        result = self.bindings["enqueue"](request({"id": "ok"}), output)
        self.assertEqual(202, result.status_code)
        self.assertEqual({"id": "ok"}, json.loads(output.value))
        message = SimpleNamespace(get_body=lambda: b'{"id":"ok"}', message_id="m1", delivery_count=1)
        self.bindings["consume"](message)
        with self.assertRaises(ValueError):
            self.bindings["consume"](func.ServiceBusMessage(body=b'{"id":"fail"}'))

    def test_sdk_examples_import_without_cloud_access(self):
        for name, path in [("pg_demo", "labs/data/postgres_client.py"),
                           ("cosmos_demo", "labs/cosmos/demo.py"),
                           ("redis_demo", "labs/redis/demo.py"),
                           ("bus_demo", "labs/integrations/message_bus.py"),
                           ("event_demo", "labs/integrations/publish_event.py"),
                           ("settings_demo", "labs/security/read_settings.py")]:
            with self.subTest(path=path):
                load_module(name, path)
        cosmos = load_module("change_feed_demo", "labs/cosmos/function_app.py")
        self.assertIn("changed", functions(cosmos))


def free_port():
    with socket.socket() as sock:
        sock.bind(("127.0.0.1", 0))
        return sock.getsockname()[1]


class DistributedTracingTests(unittest.TestCase):
    def test_trace_context_crosses_http_and_backend_errors_propagate(self):
        backend_port, frontend_port = free_port(), free_port()
        env = os.environ.copy()
        # Preserve the parent's installed packages when bypassing the Windows venv launcher.
        env["PYTHONPATH"] = os.pathsep.join(entry for entry in sys.path if entry)
        env.pop("APPLICATIONINSIGHTS_CONNECTION_STRING", None)
        env.pop("OTEL_PROPAGATORS", None)
        processes = []
        with tempfile.TemporaryDirectory(dir=ROOT / ".tmp") as temporary:
            self.assertTrue(Path(temporary).resolve().is_relative_to((ROOT / ".tmp").resolve()))
            logs = []
            try:
                for role, port in [("backend", backend_port), ("frontend", frontend_port)]:
                    log = open(Path(temporary) / f"{role}.log", "w+b")
                    logs.append(log)
                    # Bypass Windows' virtualenv launcher so terminate/wait owns the server process itself.
                    command = [getattr(sys, "_base_executable", sys.executable), "-u", str(ROOT / "labs/observability/services.py"), role,
                               "--port", str(port), "--backend-url", f"http://127.0.0.1:{backend_port}/lookup"]
                    processes.append(subprocess.Popen(command, env=env, stdout=log, stderr=log,
                        creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0)))
                    deadline = time.monotonic() + 15
                    while True:
                        if processes[-1].poll() is not None:
                            log.seek(0)
                            self.fail(log.read().decode(errors="replace"))
                        try:
                            with socket.create_connection(("127.0.0.1", port), timeout=0.1):
                                break
                        except OSError:
                            if time.monotonic() > deadline:
                                self.fail("Service did not start")
                            time.sleep(0.05)
                url = f"http://127.0.0.1:{frontend_port}/process"
                with urllib.request.urlopen(url, timeout=5) as response:
                    success = json.load(response)
                self.assertEqual(200, success["status"])
                self.assertRegex(success["trace_id"], r"^[0-9a-f]{32}$")
                started = time.monotonic()
                with urllib.request.urlopen(url + "?delay=0.2", timeout=5) as response:
                    response.read()
                self.assertGreater(time.monotonic() - started, 0.15)
                with self.assertRaises(urllib.error.HTTPError) as raised:
                    urllib.request.urlopen(url + "?fail=1", timeout=5)
                self.assertEqual(500, raised.exception.code)
                failure = json.load(raised.exception)
                time.sleep(0.2)
                logs[0].seek(0)
                backend = logs[0].read().decode(errors="replace")
                self.assertIn("trace_id=" + success["trace_id"], backend)
                self.assertIn("trace_id=" + failure["trace_id"], backend)
            finally:
                for process in processes:
                    process.terminate()
                for process in processes:
                    process.wait(timeout=10)
                for log in logs:
                    log.close()


if __name__ == "__main__":
    (ROOT / ".tmp").mkdir(exist_ok=True)
    unittest.main()
