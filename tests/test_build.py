"""Verify build cleanup and its filesystem boundaries using disposable fixtures."""
import contextlib
import io
import os
from pathlib import Path
import stat
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import build


def directory_link(link, target):
    if os.name == "nt":
        # Junction creation needs no developer-mode or symbolic-link privilege.
        env = dict(os.environ, AI200_TEST_LINK=str(link), AI200_TEST_TARGET=str(target))
        subprocess.run(["powershell.exe", "-NoProfile", "-NonInteractive", "-Command",
                        "New-Item -ItemType Junction -Path $env:AI200_TEST_LINK -Target $env:AI200_TEST_TARGET | Out-Null"],
                       env=env, check=True, capture_output=True, creationflags=subprocess.CREATE_NO_WINDOW)
    else:
        link.symlink_to(target, target_is_directory=True)


class BuildTests(unittest.TestCase):
    def setUp(self):
        self.workspace = tempfile.TemporaryDirectory(prefix="ai200-build-")
        self.addCleanup(self.workspace.cleanup)
        self.fixture = Path(self.workspace.name).resolve()
        self.assertTrue(self.fixture.is_relative_to(Path(tempfile.gettempdir()).resolve()))
        self.root = self.fixture / "project"
        self.root.mkdir()
        self.temporary = self.root / ".tmp"
        self.root_patch = patch.object(build, "ROOT", self.root)
        self.root_patch.start()
        self.addCleanup(self.root_patch.stop)

    def test_build_empties_nested_hidden_and_readonly_files_and_preserves_project_files(self):
        nested = self.temporary / "cache/nested"
        nested.mkdir(parents=True)
        (nested / ".hidden").write_text("temporary", encoding="utf-8")
        readonly = self.temporary / "readonly.txt"
        readonly.write_text("temporary", encoding="utf-8")
        readonly.chmod(stat.S_IREAD)
        preserved = []
        for relative in ("index.html", "artifacts/notes.txt", ".venv/keep.txt", ".git/keep.txt"):
            path = self.root / relative
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text("keep", encoding="utf-8")
            preserved.append(path)
        with patch.object(build.subprocess, "run") as run, contextlib.redirect_stdout(io.StringIO()):
            build.build()
        self.assertTrue(self.temporary.is_dir())
        self.assertEqual(list(self.temporary.iterdir()), [])
        for path in preserved:
            self.assertEqual(path.read_text(encoding="utf-8"), "keep")
        self.assertEqual([Path(call.args[0][1]).name for call in run.call_args_list], list(build.GENERATORS))
        self.assertTrue(all(call.kwargs == {"cwd": self.root, "check": True} for call in run.call_args_list))

    def test_missing_temporary_directory_is_created_and_regular_file_is_not_deleted(self):
        build.clean_tmp()
        self.assertTrue(self.temporary.is_dir())
        self.temporary.rmdir()
        self.temporary.write_text("keep", encoding="utf-8")
        with self.assertRaises(ValueError):
            build.clean_tmp()
        self.assertEqual(self.temporary.read_text(encoding="utf-8"), "keep")

    def test_redirected_temporary_directory_is_rejected_without_touching_its_target(self):
        outside = self.fixture / "outside"
        outside.mkdir()
        marker = outside / "keep.txt"
        marker.write_text("keep", encoding="utf-8")
        directory_link(self.temporary, outside)
        with self.assertRaises(ValueError):
            build.clean_tmp()
        self.assertEqual(marker.read_text(encoding="utf-8"), "keep")

    def test_nested_directory_links_are_removed_without_following_them(self):
        outside = self.fixture / "outside"
        outside.mkdir()
        marker = outside / "keep.txt"
        marker.write_text("keep", encoding="utf-8")
        (self.temporary / "nested").mkdir(parents=True)
        directory_link(self.temporary / "linked", outside)
        directory_link(self.temporary / "nested/linked", outside)
        build.clean_tmp()
        self.assertEqual(list(self.temporary.iterdir()), [])
        self.assertEqual(marker.read_text(encoding="utf-8"), "keep")

    def test_check_mode_preserves_temporary_files_and_only_checks_generators(self):
        self.temporary.mkdir()
        marker = self.temporary / "keep.txt"
        marker.write_text("keep", encoding="utf-8")
        with patch.object(build.subprocess, "run") as run, contextlib.redirect_stdout(io.StringIO()):
            build.build(check=True)
        self.assertEqual(marker.read_text(encoding="utf-8"), "keep")
        self.assertEqual(run.call_count, 3)
        self.assertTrue(all(call.args[0][-1] == "--check" for call in run.call_args_list))

    def test_cleanup_failure_stops_the_build_before_generating_files(self):
        with patch.object(build, "clean_tmp", side_effect=PermissionError("locked")), \
                patch.object(build.subprocess, "run") as run, contextlib.redirect_stdout(io.StringIO()):
            with self.assertRaises(PermissionError):
                build.build()
        run.assert_not_called()

    def test_generator_failure_stops_later_generators(self):
        error = subprocess.CalledProcessError(1, "generator")
        with patch.object(build.subprocess, "run", side_effect=[None, error]) as run, \
                contextlib.redirect_stdout(io.StringIO()):
            with self.assertRaises(subprocess.CalledProcessError):
                build.build()
        self.assertEqual(run.call_count, 2)
        self.assertTrue(self.temporary.is_dir())


if __name__ == "__main__":
    unittest.main()
