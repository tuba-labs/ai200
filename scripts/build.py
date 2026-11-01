"""Build the site after emptying .tmp, or check outputs without changing files."""
import argparse
import os
from pathlib import Path
import shutil
import stat
import subprocess
import sys


ROOT = Path(__file__).resolve().parents[1]
GENERATORS = ("build_jargon.py", "build_workshops.py", "build_exam_objectives.py", "build_navigation.py", "build_share_previews.py")


def clean_tmp():
    root = ROOT.resolve(strict=True)
    temporary = root / ".tmp"
    if temporary.is_symlink() or temporary.is_junction() or temporary.resolve().parent != root:
        raise ValueError(f"Refusing to clean a redirected temporary directory: {temporary}")
    if temporary.exists() and not temporary.is_dir():
        raise ValueError(f"Temporary path must be a directory: {temporary}")
    temporary.mkdir(exist_ok=True)

    def remove_readonly(function, path, error):
        entry = Path(path)
        if (not isinstance(error, PermissionError) or function not in (os.unlink, os.rmdir)
                or entry.is_symlink() or entry.is_junction()
                or not entry.resolve().is_relative_to(temporary)):
            raise error
        entry.chmod(entry.stat().st_mode | stat.S_IWRITE)
        function(path)

    removed = 0
    for entry in temporary.iterdir():
        # Remove directory links themselves; never descend into their targets.
        if entry.is_symlink():
            entry.unlink()
        elif entry.is_junction():
            entry.rmdir()
        elif entry.is_dir():
            if not entry.resolve().is_relative_to(temporary):
                raise ValueError(f"Temporary directory escapes the cleanup path: {entry}")
            shutil.rmtree(entry, onexc=remove_readonly)
        else:
            try:
                entry.unlink()
            except PermissionError as error:
                remove_readonly(os.unlink, entry, error)
        removed += 1
    return temporary, removed


def build(check=False):
    if not check:
        print(f"Emptying {ROOT / '.tmp'} ...", flush=True)
        temporary, removed = clean_tmp()
        print(f"Removed {removed} temporary entries; kept {temporary} ready for tests.", flush=True)
    for generator in GENERATORS:
        command = [sys.executable, str(ROOT / "scripts" / generator)]
        if check:
            command.append("--check")
        subprocess.run(command, cwd=ROOT, check=True)
    print("Build checked." if check else "Build complete.", flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check generated files without cleaning or writing")
    args = parser.parse_args()
    try:
        build(check=args.check)
    except (OSError, ValueError, subprocess.CalledProcessError) as error:
        parser.exit(1, f"Build failed: {error}\n")


if __name__ == "__main__":
    main()
