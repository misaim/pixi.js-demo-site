@set ASEPRITE="..\..\aseprite_v1.2.6_windows\aseprite.exe"

FOR %%i IN (world\raw\*.png) DO %ASEPRITE% -b %%i --scale 4 --save-as .\world\large\%%~ni.png
