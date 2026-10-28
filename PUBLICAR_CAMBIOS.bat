@echo off
chcp 65001 >nul
title Publicar Cambios - Enfermeria Certificada

echo ======================================================================
echo    PUBLICANDO ACTUALIZACIONES A ENFERMERIA CERTIFICADA
echo ======================================================================
echo.

set "GIT_CMD=C:\Users\Amir Pantoja\AppData\Local\GitHubDesktop\app-3.6.9\resources\app\git\cmd\git.exe"
if not exist "%GIT_CMD%" (
    where git >nul 2>&1
    if %errorlevel% equ 0 (
        set "GIT_CMD=git"
    )
)

echo Usando ejecutable: %GIT_CMD%
echo.

echo [1/4] Restaurando bun.lock...
"%GIT_CMD%" checkout 9e9257a1 -- bun.lock

echo [2/4] Preparando archivos modificados...
"%GIT_CMD%" add -A

echo.
echo [3/4] Registrando cambios...
"%GIT_CMD%" commit -m "Restaurar bun.lock y vercel.json para compilacion limpia en Vercel"

echo.
echo [4/4] Enviando a GitHub y Vercel...
"%GIT_CMD%" push origin main

echo.
echo ======================================================================
echo    LISTO! Los cambios han sido subidos exitosamente a GitHub.
echo    Vercel esta compilando y publicando tu pagina web en vivo:
echo    https://www.enfermeriacertificada.com
echo    https://enfermeria-certificada-omuj.vercel.app
echo ======================================================================
echo FIN: %DATE% %TIME%
