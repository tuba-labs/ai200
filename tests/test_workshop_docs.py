"""Check workshop files and recovery instructions without Azure or extra packages."""
import ast
from html import unescape
from html.parser import HTMLParser
import importlib.util
from pathlib import Path
import re
import shlex
import subprocess
import tempfile
import unittest
from urllib.parse import unquote, urlsplit
import json


ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("domain_workshops", ROOT / "scripts/build_domain_workshops.py")
builder = importlib.util.module_from_spec(spec)
spec.loader.exec_module(builder)


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.code, self.files = [], [], [], []
        self.pre = None
        self.in_code = False
        self.in_note = False
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        self.links.extend(attrs[key] for key in ("href", "src") if key in attrs)
        if tag == "details" and "source-file" in attrs.get("class", "").split():
            self.files.append(attrs)
        if tag == "pre":
            self.pre = {"source": attrs.get("data-source"), "language": attrs.get("data-language"), "text": "", "notes": ""}
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
        cls.html = {path.name: path.read_text(encoding="utf-8") for path in ROOT.glob("*.html")}
        cls.pages = {name: Page(text) for name, text in cls.html.items()}
        cls.short = {name: page for name, page in cls.pages.items()
                     if re.search(r"<title>Workshop \d+:", cls.html[name])}

    def commands(self, page):
        return [block["text"] for block in page.code
                if block["language"] == "PowerShell" and not block["source"]]

    def test_common_setup_is_not_repeated_in_workshops(self):
        setup = re.compile(r"\baz (?:login|account set|aks install-cli|extension add)\b"
                           r"|\bwinget install\b|\bActivate\.ps1\b|-m (?:venv|pip install)\b")
        for name, page in self.pages.items():
            if name not in self.short and not name.startswith("workshop-domene-"):
                continue
            for block in self.commands(page):
                for line in block.splitlines():
                    if line.lstrip().startswith("#"):
                        continue
                    with self.subTest(page=name, command=line):
                        self.assertIsNone(setup.search(line), "Move shared setup to getting-started.html")
        requirements = ROOT / "labs/requirements.txt"
        included = {(requirements.parent / line[3:].strip()).resolve()
                    for line in requirements.read_text(encoding="utf-8").splitlines() if line.startswith("-r ")}
        self.assertEqual(included, {path.resolve() for path in (ROOT / "labs").glob("*/requirements.txt")})

    def test_azure_resource_creation_belongs_to_workshops(self):
        groups, registries = [], []
        for name, page in self.short.items():
            for block in self.commands(page):
                for line in block.splitlines():
                    if line.strip().startswith("az group create "):
                        groups.append(name)
                    if line.strip().startswith("az acr create "):
                        registries.append(name)
        self.assertCountEqual(groups, ["workshop-acr.html", "workshop-postgresql.html",
                                       "workshop-integrations.html", "workshop-security.html"])
        self.assertEqual(registries, ["workshop-acr.html"])
        for block in self.commands(self.pages["getting-started.html"]):
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
        for name, page in self.pages.items():
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

    def restore_commands(self):
        for name, page in self.short.items():
            directory = ROOT
            for block in self.commands(page):
                for line in block.splitlines():
                    if line.startswith("#") and "fra prosjektroten" in line.lower():
                        directory = ROOT
                    if line.startswith("Set-Location "):
                        directory = (directory / line.split(maxsplit=1)[1]).resolve()
                    if line.startswith("git restore "):
                        arguments = shlex.split(line)
                        yield name, directory, arguments, (directory / arguments[-1]).resolve()

    def test_local_links_and_ids(self):
        for name, page in self.pages.items():
            with self.subTest(page=name):
                self.assertEqual(len(page.ids), len(set(page.ids)), "Duplicate HTML IDs")
                for href in page.links:
                    url = urlsplit(href)
                    if url.scheme or url.netloc or not url.path and not url.fragment:
                        continue
                    target = (ROOT / unquote(url.path)).resolve() if url.path else ROOT / name
                    self.assertTrue(target.exists(), href)
                    if url.fragment and target.name in self.pages:
                        self.assertIn(unquote(url.fragment), self.pages[target.name].ids, href)

    def test_inline_files_are_complete_and_closed(self):
        for name, page in self.pages.items():
            self.assertNotIn("artifacts/labs", self.html[name], name)
            for panel in page.files:
                with self.subTest(page=name, source=panel["data-source-file"]):
                    self.assertNotIn("open", panel)
            for block in page.code:
                if block["source"]:
                    with self.subTest(page=name, source=block["source"]):
                        source = (ROOT / block["source"]).resolve()
                        self.assertTrue(source.is_relative_to(ROOT / "labs"))
                        self.assertEqual(block["text"], source.read_text(encoding="utf-8"))
                        if source.suffix == ".json":
                            json.loads(block["text"])

    def test_generated_pages_and_cleanup_commands_match_sources(self):
        workshops = builder.read_workshops()
        self.assertEqual(len(workshops), len(self.short))
        for name in self.short:
            self.assertEqual(builder.inline_sources(self.html[name]), self.html[name], name)
        for domain in builder.DOMAINS:
            self.assertEqual(builder.render(domain, workshops), self.html[f'workshop-domene-{domain["slug"]}.html'])
            for _, numbers in domain["parts"]:
                for number in numbers:
                    chapter = builder.chapter(number, 1, workshops[number])
                    for section_id, _, body in workshops[number]["sections"]:
                        if section_id == "opprydding":
                            rendered = re.search(rf'id="w{number}-opprydding"><h4>.*?</h4>([\s\S]*?)</section>', chapter)[1]
                            plain = lambda text: re.sub(r"\s+", " ", unescape(re.sub(r"<[^>]+>", " ", text))).strip()
                            self.assertEqual(plain(body), plain(rendered), f"Changed cleanup instructions in workshop {number}")
                            for command in re.findall(r"<pre\b[\s\S]*?</pre>", body):
                                self.assertIn(command, chapter, f"Lost cleanup command in workshop {number}")

    def test_lab_paths_and_directory_changes_stay_in_project(self):
        self.assertNotIn("artifacts/labs", (ROOT / "README.md").read_text(encoding="utf-8"))
        for name, page in self.short.items():
            directory = ROOT
            for block in self.commands(page):
                for line in block.splitlines():
                    if line.startswith("#") and "fra prosjektroten" in line.lower():
                        directory = ROOT
                    if line.startswith("Set-Location "):
                        directory = (directory / line.split(maxsplit=1)[1]).resolve()
                        self.assertTrue(directory.is_relative_to(ROOT), (name, line, directory))
                        self.assertTrue(directory.is_dir(), (name, line))
                for path in re.findall(r"\blabs/[A-Za-z0-9_./-]+", block):
                    # These settings files are generated from the example during preparation.
                    if path.endswith("/local.settings.json"):
                        path = path.replace("/local.settings.json", "/local.settings.example.json")
                    self.assertTrue((ROOT / path).exists(), (name, path))
            self.assertNotIn("artifacts/labs", self.html[name])
            if name == "workshop-acr.html":
                self.assertEqual(directory, ROOT, "ACR task must return to project root")

    def test_container_starts_with_v1(self):
        tree = ast.parse((ROOT / "labs/containers/app.py").read_text(encoding="utf-8"))
        defaults = [node.args[1].value for node in ast.walk(tree)
                    if isinstance(node, ast.Call) and isinstance(node.func, ast.Attribute)
                    and node.func.attr == "getenv" and len(node.args) > 1
                    and isinstance(node.args[0], ast.Constant) and node.args[0].value == "APP_VERSION"]
        self.assertEqual(defaults, ["v1"])

    def test_local_settings_examples_keep_placeholders(self):
        for path in (ROOT / "labs").glob("*/local.settings.example.json"):
            values = json.loads(path.read_text(encoding="utf-8"))["Values"]
            for name, value in values.items():
                with self.subTest(file=path.name, setting=name):
                    if "Connection" in name or name == "AzureWebJobsStorage":
                        self.assertTrue(value == "" or value.startswith("REPLACE_WITH_"))

    def test_settings_are_filled_between_copy_and_host_start(self):
        for slug, folder in (("change-feed", "cosmos"), ("integrations", "integrations"), ("bindings", "bindings")):
            text = self.html[f"workshop-{slug}.html"]
            copy = text.index(f"Copy-Item labs/{folder}/local.settings.example.json")
            start = text.index("func start", copy)
            between = text[copy:start]
            self.assertIn("</pre><p>", between, folder)
            self.assertIn(f"<code>labs/{folder}/local.settings.json</code>", between, folder)
            self.assertIn("AzureWebJobsStorage", between, folder)

    def test_git_restore_recovers_sources_and_preserves_results(self):
        tracked = set(git(ROOT, "ls-files", "--", "labs").splitlines())
        commands = list(self.restore_commands())
        self.assertTrue(commands)
        sources = {target.relative_to(ROOT).as_posix(): target.read_bytes() for _, _, _, target in commands}
        self.assertTrue(set(sources).issubset(tracked))
        parent = ROOT / ".tmp"
        parent.mkdir(exist_ok=True)
        with tempfile.TemporaryDirectory(prefix="docs-git-", dir=parent) as temporary:
            fixture = Path(temporary).resolve()
            self.assertTrue(fixture.is_relative_to(parent.resolve()))
            for name, content in sources.items():
                target = fixture / name
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(content)
            git(fixture, "init", "-q")
            git(fixture, "config", "core.autocrlf", "false")
            git(fixture, "config", "core.excludesfile", str(fixture / ".gitignore"))
            git(fixture, "add", "labs")
            git(fixture, "-c", "user.name=Workshop QA", "-c", "user.email=qa@example.invalid", "commit", "-q", "-m", "Baseline fixture")
            result = fixture / "artifacts/keep.txt"
            result.parent.mkdir()
            result.write_text("learner results", encoding="utf-8")
            for page, directory, arguments, original in commands:
                with self.subTest(page=page, file=arguments[-1]):
                    relative = original.relative_to(ROOT).as_posix()
                    target = fixture / relative
                    target.write_text("temporary workshop edit", encoding="utf-8")
                    git(fixture / directory.relative_to(ROOT), *arguments[1:])
                    self.assertEqual(target.read_bytes(), sources[relative])
                    self.assertEqual(result.read_text(encoding="utf-8"), "learner results")

    def test_generated_outputs_and_local_settings_are_ignored(self):
        paths = ["artifacts/queries.sql", "artifacts/deployment.before-faults.yaml",
                 "artifacts/notes-indexing-policy.original.json", "artifacts/kql-results.csv",
                 "labs/cosmos/local.settings.json", "labs/integrations/local.settings.json",
                 "labs/bindings/local.settings.json", "labs/integrations/.python_packages/lib/example.py"]
        for path in paths:
            with self.subTest(path=path):
                self.assertEqual(git(ROOT, "check-ignore", path).strip(), path)


if __name__ == "__main__":
    unittest.main()
