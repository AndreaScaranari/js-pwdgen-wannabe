// console.log ("Hakuna Matata")

// 1 Chiesto il nome all'utente
const firstName = prompt("Qual è il tuo nome?", "Silvio");
// console.log(firstName);

// 2 Chiesto il cognome all'utente
const secondName = prompt("Qual è il tuo cognome?", "Pellico");
// console.log(secondName);

// 3 Chiesto il colore preferito dell'utente
const favColor = prompt("Qual è il tuo colore preferito?", "Viola");
// console.log(favColor);

// 4 Creato il messaggio che precede la password
let message = "La tua password per accedere al nostro servizio è: "
// console.log(message);

// 5 Creato il finale della Password
const endingPW = 23;
// console.log(endingPW);

// 6 Password creata
const password = firstName+secondName+favColor+endingPW;
// console.log(password)

// Testing messaggio completo
// console.log(message+password);

// Testing password inserita nel messaggio
// message += password;
// console.log(message);

// // 7 Stampare la password in pagina
document.getElementById("your-password").innerHTML = `${message} <i> ${password} </i>`;
