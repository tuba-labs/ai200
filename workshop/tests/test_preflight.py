"""Exercise the local-only boundary without sign-in, state files or installers."""
from types import SimpleNamespace

import pytest
import preflight


def local_environment(monkeypatch, tmp_path, *, engine_os='linux'):
    monkeypatch.setattr(preflight, 'ROOT', tmp_path / 'no-bootstrap-state')
    monkeypatch.setattr(preflight.sys, 'argv', ['preflight.py', '--local-only'])
    monkeypatch.setattr(preflight.shutil, 'which', lambda name: '/usr/bin/' + name)

    def external(*args, raw=False):
        # Any Azure operation beyond local CLI/compiler version checks fails.
        outputs = {
            ('az', 'version'): {'azure-cli': '2.91.0'},
            ('az', 'bicep', 'version'): 'Bicep CLI version 0.49.2',
            ('kubectl', 'version', '--client', '-o', 'json'): {'clientVersion': {'major':'1', 'minor':'34'}},
            ('docker', 'info', '--format', '{{json .ServerVersion}}'): '28.5.1',
            ('docker', 'info', '--format', '{{json .OSType}}'): engine_os,
            ('docker', 'buildx', 'version'): 'github.com/docker/buildx v0.29.0',
            ('bash', '--version'): 'GNU bash, version 5.2.21',
            ('openssl', 'version'): 'OpenSSL 3.0.13',
            ('jq', '--version'): 'jq-1.7',
        }
        assert args in outputs, 'Local-only mode attempted an unexpected operation: ' + str(args)
        return outputs[args]

    def java(args, **_):
        assert args == ['java', '-version']
        return SimpleNamespace(stdout='', stderr='openjdk version "21.0.9"')

    monkeypatch.setattr(preflight, 'run', external)
    monkeypatch.setattr(preflight.subprocess, 'run', java)


def test_local_check_requires_neither_bootstrap_state_nor_azure_access(monkeypatch, tmp_path, capsys):
    local_environment(monkeypatch, tmp_path)
    preflight.main()
    assert 'All local gates passed' in capsys.readouterr().out
    assert not (tmp_path / 'no-bootstrap-state').exists()


def test_local_check_rejects_windows_container_engine(monkeypatch, tmp_path, capsys):
    local_environment(monkeypatch, tmp_path, engine_os='windows')
    with pytest.raises(SystemExit, match='Local prerequisites failed'):
        preflight.main()
    assert 'Switch Docker Desktop to Linux containers' in capsys.readouterr().out


def test_local_check_reports_missing_tools_without_touching_azure(monkeypatch, tmp_path, capsys):
    local_environment(monkeypatch, tmp_path)
    monkeypatch.setattr(preflight.shutil, 'which', lambda name: None if name == 'az' else '/usr/bin/' + name)
    with pytest.raises(SystemExit, match='Local prerequisites failed'):
        preflight.main()
    assert 'Missing az' in capsys.readouterr().out
