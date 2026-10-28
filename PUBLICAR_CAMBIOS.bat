@echo off
chcp 65001 >nul
title Publicar Cambios - Enfermeria Certificada

echo ======================================================================
echo    PUBLICANDO ACTUALIZACIONES A ENFERMERIA CERTIFICADA
echo ======================================================================
echo.

set "GIT_CMD="
for /d %%D in ("%LOCALAPPDATA%\GitHubDesktop\app-*") do (
    if exist "%%D\resources\app\git\cmd\git.exe" (
        set "GIT_CMD=%%D\resources\app\git\cmd\git.exe"
    )
)

if not defined GIT_CMD (
    where git >nul 2>&1
    if %errorlevel% equ 0 (
        set "GIT_CMD=git"
    )
)

if not defined GIT_CMD (
    echo [AVISO] Git por consola no encontrado automaticamente.
    echo Abre GitHub Desktop directamente desde tu escritorio para hacer Commit y Push.
    pause
    exit /b 1
)

echo Usando ejecutable: %GIT_CMD%
echo.

echo [1/3] Preparando archivos modificados...
"%GIT_CMD%" add -A

echo.
echo [2/3] Registrando cambios...
"%GIT_CMD%" commit -m "Preparacion para Google Play Store: manifest.json, politica de privacidad y Google Tag Manager"

echo.
echo [3/3] Enviando a GitHub y Vercel...
"%GIT_CMD%" push origin main

echo.
echo ======================================================================
echo    LISTO! Los cambios han sido subidos exitosamente a GitHub.
echo    Vercel esta compilando y publicando tu pagina web en vivo:
echo    https://www.enfermeriacertificada.com
echo    https://enfermeria-certificada-omuj.vercel.app
echo ======================================================================
echo FIN: %DATE% %TIME%
pause
