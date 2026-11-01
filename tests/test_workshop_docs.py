"""Check current workshop links, inline lab files and setup offline."""
import ast
from html.parser import HTMLParser
from pathlib import Path
import re
import subprocess
import sys
import unittest
from urllib.parse import unquote, urlsplit
import json


ROOT = Path(__file__).resolve().parents[1]
# Match direct script execution when importing the builder by its file path.
sys.path.insert(0, str(ROOT / "scripts"))
from build_navigation import current_pages


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.code, self.files = [], [], [], []
        self.pre = None
        self.in_code = False
        self.in_note = False
        self.details = []
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        self.links.extend(attrs[key] for key in ("href", "src") if key in attrs)
        if tag == "details":
            self.details.append(attrs)
        if tag == "pre":
            self.pre = {"source": attrs.get("data-source"), "language": attrs.get("data-language"), "text": "", "notes": ""}
            if self.pre["source"]:
                self.files.append(dict(self.details[-1] if self.details else {}, **{"data-source-file": self.pre["source"]}))
        if tag == "code" and self.pre is not None:
            self.in_code = True
        if tag == "span" and self.pre is not None and attrs.get("class") in ("code-line-notes", "code-note"):
            self.in_note = True

    def handle_data(self, text):
        if self.pre is not None and self.in_code:
            self.pre["text"] += text
        if self.pre is not None and self.in_note:
            self.pre["notes"] += text

    def handle_endtag(self, tag):
        if tag == "details" and self.details:
            self.details.pop()
        if tag == "code":
            self.in_code = False
        if tag == "span":
            self.in_note = False
        if tag == "pre" and self.pre is not None:
            self.code.append(self.pre)
            self.pre = None


def git(directory, *args):
    return subprocess.run(["git", "-c", f"safe.directory={directory.as_posix()}", "-C", str(directory), *args],
                          check=True, capture_output=True, text=True, encoding="utf-8").stdout


class WorkshopDocumentationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = {path.relative_to(ROOT).as_posix(): path.read_text(encoding="utf-8") for path in current_pages()}
        cls.pages = {name: Page(text) for name, text in cls.html.items()}
        cls.workshops = {name: page for name, page in cls.pages.items()
                         if re.fullmatch(r"workshops/d[1-4][ab]\.html", name)}

    def commands(self, page):
        return [block["text"] for block in page.code
                if block["language"] == "PowerShell" and not block["source"]]

    def test_common_setup_is_not_repeated_in_workshops(self):
        setup = re.compile(r"\baz (?:login|account set|aks install-cli|extension add)\b"
                           r"|\bwinget install\b|\bActivate\.ps1\b|-m (?:venv|pip install)\b")
        for name, page in self.workshops.items():
            for block in self.commands(page):
                for line in block.splitlines():
                    if line.lstrip().startswith("#"):
                        continue
                    with self.subTest(page=name, command=line):
                        self.assertIsNone(setup.search(line), "Move shared setup to getting-started.html")
        requirements = ROOT / "workshops/labs/requirements.txt"
        included = {(requirements.parent / line[3:].strip()).resolve()
                    for line in requirements.read_text(encoding="utf-8").splitlines() if line.startswith("-r ")}
        self.assertEqual(included, {path.resolve() for path in (ROOT / "workshops/labs").glob("*/requirements.txt")})

    def test_azure_resource_creation_belongs_to_workshops(self):
        for name in ("getting-started.html", "workshops/setup.html"):
            for block in self.commands(self.pages[name]):
                for line in block.splitlines():
                    if not line.lstrip().startswith("#"):
                        self.assertNotRegex(line, r"\baz\s+.*\bcreate\b")
        self.assertNotRegex(self.html["getting-started.html"], r"Resource groups\s*(?:→|&rarr;)\s*Create")

    def assert_code_lines_explained(self, text, marker):
        previous = ''
        for line in text.splitlines():
            # Closing delimiters carry no operation that needs its own explanation.
            closing_only = re.fullmatch(r"[}\])\s]+[;,]?", line)
            if line.strip() and not line.lstrip().startswith(marker) and not closing_only:
                self.assertTrue(previous.lstrip().startswith(marker), line)
            previous = line

    def test_code_windows_explain_each_line(self):
        for name, page in dict(self.workshops, **{"getting-started.html": self.pages["getting-started.html"]}).items():
            for block in page.code:
                with self.subTest(page=name, source=block["source"], language=block["language"]):
                    if block["language"] in ("JSON", "Text"):
                        self.assertEqual(len(block["text"].splitlines()), len(block["notes"].splitlines()))
                        if block["language"] == "JSON":
                            json.loads(block["text"])
                    if block["source"] or block["language"] not in ("PowerShell", "SQL", "KQL"):
                        continue
                    marker = {"SQL": "--", "KQL": "//"}.get(block["language"], "#")
                    self.assert_code_lines_explained(block["text"], marker)

    def test_code_explanations_allow_closures_but_still_require_commands(self):
        for marker in ("#", "--", "//"):
            with self.subTest(marker=marker):
                self.assert_code_lines_explained(
                    f"{marker} Explain the operation.\noperation(\n    )\n]\n}}\n  }} ) ];\n),", marker)
                for line in ("operation()", "} else {", "); operation()"):
                    with self.subTest(line=line), self.assertRaises(AssertionError):
                        self.assert_code_lines_explained(
                            f"{marker} Explain the first operation.\noperation()\n}}\n{line}", marker)

    def test_local_links_and_ids(self):
        for name, page in self.pages.items():
            with self.subTest(page=name):
                self.assertEqual(len(page.ids), len(set(page.ids)), "Duplicate HTML IDs")
                for href in page.links:
                    url = urlsplit(href)
                    if url.scheme or url.netloc or not url.path and not url.fragment:
                        continue
                    target = ((ROOT / name).parent / unquote(url.path)).resolve() if url.path else ROOT / name
                    self.assertTrue(target.exists(), href)
                    self.assertTrue(target.is_relative_to(ROOT), href)
                    relative = target.relative_to(ROOT).as_posix()
                    if url.fragment and relative in self.pages:
                        self.assertIn(unquote(url.fragment), self.pages[relative].ids, href)

    def test_inline_files_are_complete_and_closed(self):
        for name, page in self.pages.items():
            self.assertNotIn("artifacts/labs", self.html[name], name)
            for panel in page.files:
                with self.subTest(page=name, source=panel["data-source-file"]):
                    self.assertNotIn("open", panel)
            for block in page.code:
                if block["source"]:
                    with self.subTest(page=name, source=block["source"]):
                        source = ((ROOT / name).parent / block["source"]).resolve()
                        self.assertTrue(source.is_relative_to(ROOT / "workshops/labs"))
                        self.assertEqual(block["text"], source.read_text(encoding="utf-8"))
                        if source.suffix == ".json":
                            json.loads(block["text"])

    def test_lab_paths_and_directory_changes_stay_in_project(self):
        self.assertNotIn("artifacts/labs", (ROOT / "README.md").read_text(encoding="utf-8"))
        for name, page in self.workshops.items():
            directory = ROOT
            for block in self.commands(page):
                for line in block.splitlines():
                    if line.startswith("#") and "fra prosjektroten" in line.lower():
                        directory = ROOT
                    if line.startswith("Set-Location "):
                        directory = (directory / line.split(maxsplit=1)[1]).resolve()
                        self.assertTrue(directory.is_relative_to(ROOT), (name, line, directory))
                        self.assertTrue(directory.is_dir(), (name, line))
                for path in re.findall(r"\bworkshops/labs/[A-Za-z0-9_./-]+", block):
                    # These settings files are generated from the example during preparation.
                    if path.endswith("/local.settings.json"):
                        path = path.replace("/local.settings.json", "/local.settings.example.json")
                    self.assertTrue((ROOT / path).exists(), (name, path))
            self.assertNotIn("artifacts/labs", self.html[name])

    def test_container_starts_with_v1(self):
        tree = ast.parse((ROOT / "workshops/labs/containers/app.py").read_text(encoding="utf-8"))
        defaults = [node.args[1].value for node in ast.walk(tree)
                    if isinstance(node, ast.Call) and isinstance(node.func, ast.Attribute)
                    and node.func.attr == "getenv" and len(node.args) > 1
                    and isinstance(node.args[0], ast.Constant) and node.args[0].value == "APP_VERSION"]
        self.assertEqual(defaults, ["v1"])

    def test_local_settings_examples_keep_placeholders(self):
        for path in (ROOT / "workshops/labs").glob("*/local.settings.example.json"):
            values = json.loads(path.read_text(encoding="utf-8"))["Values"]
            for name, value in values.items():
                with self.subTest(file=path.name, setting=name):
                    if "Connection" in name or name == "AzureWebJobsStorage":
                        self.assertTrue(value == "" or value.startswith("REPLACE_WITH_"))

    def test_generated_outputs_and_local_settings_are_ignored(self):
        paths = ["artifacts/queries.sql", "artifacts/deployment.before-faults.yaml",
                 "artifacts/notes-indexing-policy.original.json", "artifacts/kql-results.csv",
                 "workshops/labs/cosmos/local.settings.json", "workshops/labs/integrations/local.settings.json",
                 "workshops/labs/bindings/local.settings.json", "workshops/labs/integrations/.python_packages/lib/example.py"]
        for path in paths:
            with self.subTest(path=path):
                self.assertEqual(git(ROOT, "check-ignore", path).strip(), path)


if __name__ == "__main__":
    unittest.main()
