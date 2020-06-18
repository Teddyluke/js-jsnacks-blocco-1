// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var num1 = parseInt(prompt("inserisci un numero"));
var num2 = parseInt(prompt("inserisci un altro numero"));

if (num1 > num2) {
  document.getElementById('maggiore').innerHTML = "il numero più grande è : " + num1;
}
else {
  document.getElementById('maggiore').innerHTML = "il numero più grande è : " + num2;
}
