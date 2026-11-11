<#
.SYNOPSIS
Install the Windows half of the workshop environment. Run as Administrator.
.DESCRIPTION
Uses WinGet for Docker Desktop and Windows' WSL installer for Ubuntu 24.04.
Existing installations are reused. No Azure sign-in or resources are created.
Review Docker's license terms before running. Restart Windows if requested,
then initialize Ubuntu and enable its Docker Desktop integration.
.EXAMPLE
# region run
powershell -NoProfile -ExecutionPolicy Bypass -File .\setup-windows.ps1
# endregion
.EXAMPLE
powershell -NoProfile -ExecutionPolicy Bypass -File .\setup-windows.ps1 -WhatIf
#>
[CmdletBinding(SupportsShouldProcess = $true)]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
if (-not [Environment]::Is64BitOperatingSystem) { throw 'Use 64-bit Windows 11 with hardware virtualization enabled.' }
if (-not $WhatIfPreference) {
    $principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
    if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
        throw 'Open PowerShell as Administrator, then rerun this downloaded script.'
    }
    if (-not (Get-Command winget.exe -ErrorAction SilentlyContinue)) {
        throw 'Install/update App Installer from Microsoft Store to enable WinGet: https://aka.ms/getwinget'
    }
}

if ($PSCmdlet.ShouldProcess('Docker Desktop', 'Install with WinGet if missing (accept package/source agreements)')) {
    & winget.exe list --id Docker.DockerDesktop --exact --source winget --accept-source-agreements --disable-interactivity
    if ($LASTEXITCODE -ne 0) {
        & winget.exe install --id Docker.DockerDesktop --exact --source winget --accept-package-agreements --accept-source-agreements --disable-interactivity
        if ($LASTEXITCODE -ne 0) { throw "Docker Desktop installation failed (exit $LASTEXITCODE). Check WinGet output and your organization's installation policy." }
    }
}
if ($PSCmdlet.ShouldProcess('WSL2 / Ubuntu-24.04', 'Enable WSL and install Ubuntu if missing; preserve existing distribution')) {
    $distributions = @(& wsl.exe --list --quiet 2>$null) -replace "`0", ''
    if ($LASTEXITCODE -ne 0 -or $distributions -notcontains 'Ubuntu-24.04') {
        & wsl.exe --install --distribution Ubuntu-24.04 --no-launch
        if ($LASTEXITCODE -notin @(0, 3010)) { throw "WSL installation failed (exit $LASTEXITCODE). Check virtualization, Windows Update and https://learn.microsoft.com/windows/wsl/install" }
    }
    $distributions = @(& wsl.exe --list --quiet 2>$null) -replace "`0", ''
    if ($LASTEXITCODE -eq 0 -and $distributions -contains 'Ubuntu-24.04') {
        & wsl.exe --set-version Ubuntu-24.04 2
        if ($LASTEXITCODE -ne 0) { throw 'WSL2 is not ready. Restart Windows if requested, then rerun this script.' }
    }
}

Write-Host @'
Next steps (also listed on the workshop prerequisites page):
1. Restart Windows if requested, then rerun this script to finish installation.
2. Run: wsl -d Ubuntu-24.04
   Create a Linux username/password on first launch. Verify WSL2 with wsl --list --verbose.
3. Start Docker Desktop, review its terms, select the WSL2 engine and Linux containers,
   then enable Settings > Resources > WSL Integration > Ubuntu-24.04.
4. In Ubuntu, open your repository copy and run: bash workshop/scripts/setup-ubuntu.sh
   That installs Linux Azure CLI, Bicep, Java 21, Python, kubectl and supporting tools.
The Windows script deliberately does not install Windows copies of the Linux tools.
'@
