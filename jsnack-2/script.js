// L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.


var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  var nome = document.getElementById('nome').value;
  var cognome = document.getElementById('cognome').value;
  var nomecompleto = nome + " " + cognome;

 document.getElementById('nombre').innerHTML = nomecompleto;

 console.log(nome);
 console.log(cognome);
 console.log(nomecompleto);
})
