@echo off
title Push Jnan-Vexa Technologies to GitHub
echo ========================================================
echo Pushing Jnan-Vexa Technologies to GitHub...
echo Target: https://github.com/Venkataprasann/Jna--Vexa-Technologies.git
echo ========================================================
echo.

"%LOCALAPPDATA%\MinGit\cmd\git.exe" push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo [SUCCESS] Project successfully pushed to GitHub!
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo Push did not complete. If prompted, please authenticate
    echo in the browser window or enter your GitHub Personal Access Token.
    echo ========================================================
)
echo.
pause
