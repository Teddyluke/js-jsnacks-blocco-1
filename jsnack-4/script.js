// Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.

var btn = document.getElementById('btn');


btn.addEventListener("click", function () {

  var num = Math.floor(Math.random() * 11);

  if (num % 2 == 0) {
    document.getElementById('numero').classList.remove("pari");
  }
  else {
    document.getElementById('numero').classList.remove("dispari");
  }

console.log(num);
});
