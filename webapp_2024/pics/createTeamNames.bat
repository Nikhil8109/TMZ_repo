
rem Change to the directory where the png files are located
cd F:\Anzeigetafel\Logos\pics

rem Find all png files in the directory
for /f "delims=;" %%i in ('dir /b *.png') do (

  rem Extract the name by removing the ".png" extension
  set uurl = %%i
  set name=%uurl:png=%
  
  echo {^"url^": ^"%%i^", ^"name^": ^"%%i^"} >> output.txt
)

rem Add the opening and closing brackets to the output file to create a valid JSON array
echo [ > temp.txt
type output.txt >> temp.txt
echo ] >> temp.txt

rem Replace the original output file with the modified version
del output.txt
rename temp.txt output.txt
PAUSE