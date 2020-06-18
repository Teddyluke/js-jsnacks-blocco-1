// Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
// Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.


var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var operazioni = document.getElementById('operazioni').value;
  var result
  if (operazioni == 1) {
  result = num1 + num2;
  }
  else if (operazioni == 2) {
  result = num1 - num2;
  }
  else if (operazioni == 3) {
  result = num1 * num2;
  }
  else if (operazioni == 4) {
  result = num1 / num2;
  }
  document.getElementById('result').innerHTML = result;
});
