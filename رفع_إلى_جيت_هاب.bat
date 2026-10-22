@echo off
chcp 65001 > nul
echo ======================================================================
echo    رفع المشروع إلى GitHub (toc-study-viewera)
echo ======================================================================
echo.
echo جاري الرفع إلى المستودع: https://github.com/abdulla858/toc-study-viewera.git ...
echo.
git push -u origin main
echo.
if %errorlevel% equ 0 (
    echo ======================================================================
    echo    تم الرفع بنجاح إلى GitHub!
    echo    رابط المستودع: https://github.com/abdulla858/toc-study-viewera
    echo ======================================================================
) else (
    echo.
    echo تعذر الرفع. يرجى التأكد من تسجيل الدخول إلى GitHub في المتصفح أو Git Credential Manager.
)
echo.
pause
