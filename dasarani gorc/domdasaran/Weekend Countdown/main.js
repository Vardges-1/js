 var inputo = document.querySelector(".gundabad")

 inputo.addEventListener("keyup", myFunction);
 var aufgabe = 'The'
 var keystrokes = []

 function myFunction(e) {

     if (aufgabe == inputo.value) {
         inputo.style.background = "red"
     } else {
         inputo.style.background = "green";
     }

     keystrokes.push(e.timeStamp)
     totalTime = keystrokes[keystrokes.length - 1] - keystrokes[0]

     console.log(((totalTime / keystrokes.length)/1000).toFixed(2))


 }

 

 // Schreibe einen EventListener fuer onkeyup
 // - Teste ob ein Fehler gemacht wurde
 //   - Kein Fehler => gruener text
 //   - Fehler => roter text
 // - Der test kann mit
 //     if ( aufgabe.match(e.target.value) )
 //   gemacht werden
 // - Am Ende der Eingabe:
 //   - Wie schnell war der User insgesamt?
 //   - Wiveiele tasten pro sekunde?