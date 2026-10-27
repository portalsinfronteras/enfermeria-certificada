@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Publicar Cambios - Enfermeria Certificada
set "LOG_FILE=%~dp0publicar_log.txt"

echo ======================================================================
echo    PUBLICANDO ACTUALIZACIONES A ENFERMERIA CERTIFICADA
echo ======================================================================
echo.

echo INICIO: %DATE% %TIME% > "%LOG_FILE%"

set "GIT_CMD="
where git >nul 2>&1
if %errorlevel% equ 0 (
    set "GIT_CMD=git"
) else (
    for /d %%D in ("%LOCALAPPDATA%\GitHubDesktop\app-*") do (
        if exist "%%D\resources\app\git\cmd\git.exe" (
            set "GIT_CMD=%%D\resources\app\git\cmd\git.exe"
        )
    )
    if not defined GIT_CMD (
        if exist "C:\Program Files\Git\cmd\git.exe" set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
        if exist "C:\Program Files\Git\bin\git.exe" set "GIT_CMD=C:\Program Files\Git\bin\git.exe"
    )
)

if "%GIT_CMD%"=="" (
    echo [AVISO] Git no se detecto por consola. >> "%LOG_FILE%"
    echo Por favor, abre la aplicacion GITHUB DESKTOP en tu computadora. >> "%LOG_FILE%"
    echo.
    echo ======================================================================
    echo  No se encontro Git por linea de comandos.
    echo  Por favor abre directamente tu aplicacion GITHUB DESKTOP:
    echo    1. Clic en el boton azul 'Commit to main' (abajo a la izquierda).
    echo    2. Clic en el boton azul 'Push origin' (arriba a la derecha).
    echo ======================================================================
    echo.
    pause
    exit /b 1
)

echo Usando ejecutable: %GIT_CMD%
echo [1/3] Preparando archivos modificados...
"%GIT_CMD%" add -A >> "%LOG_FILE%" 2>&1

echo [2/3] Registrando cambios...
"%GIT_CMD%" commit -m "Vademecum orden alfabetico y paginacion de 20 farmacos, correccion cache PWA" >> "%LOG_FILE%" 2>&1

echo [3/3] Enviando a GitHub y Vercel...
"%GIT_CMD%" push origin main >> "%LOG_FILE%" 2>&1

echo.
echo ======================================================================
echo    LISTO! Los cambios han sido subidos exitosamente a GitHub.
echo    Vercel esta compilando y publicando tu pagina web en vivo:
echo    https://www.enfermeriacertificada.com
echo    https://enfermeria-certificada-omuj.vercel.app
echo ======================================================================
echo FIN: %DATE% %TIME% >> "%LOG_FILE%"
echo.
pause
