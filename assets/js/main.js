// Chiedi all’utente il suo nome
const firstName = prompt('Come ti chiami?');


// Chiedi il suo cognome
const surname = prompt('Inserisci il tuo cognome');


// Chiedi il suo colore preferito
const favoriteColor = prompt('Qual è il tuo colore preferito?');


// Infine scrivi sulla pagina nomecognomecolorepreferito22
const password = firstName + surname +favoriteColor + '22';

document.getElementById('password').innerHTML = `Ciao ${firstName}, la tua password è: ${password}`;

