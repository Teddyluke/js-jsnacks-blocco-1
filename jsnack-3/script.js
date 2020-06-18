// Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.

var btn = document.getElementById('btn');


btn.addEventListener("click", function () {
  var num = parseInt(prompt ("inserisci un numero"));

  if (num > 0) {
    document.getElementById('colore').className = ("green");
  }
  else if (num < 0) {
    document.getElementById('colore').className = ("red");
  }
  else {
    document.getElementById('colore').className = ("blue");
  }

});
