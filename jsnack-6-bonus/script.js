// Nella pagina c'è un bottone#lanciaMoneta.
// Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
// Se il numero è pari mostra un img con la testa della moneta.
// Se è dispari mostra un'altra img con la croce della moneta.


var btn = document.getElementById('lanciaMoneta')


btn.addEventListener("click", function () {
var random = Math.floor(Math.random() * 9);
console.log(random)
if (random % 2 ==0) {
  var testa = document.getElementById('testa').className = "show"
  var croce = document.getElementById('croce').className = "hidden"
}
else {
  var croce = document.getElementById('croce').className = "show"
  var testa = document.getElementById('testa').className = "hidden"

}
})
