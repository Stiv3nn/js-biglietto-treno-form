//INPUT DELLA PAGINA
const nomeCognomeField = document.getElementById('nome-congome');
const chilometriField = document.getElementById('KM');
const anniField = document.getElementById('età');
const form = document.getElementById('elementi-ingresso'); 


//OUTPUT DELLA PAGINA
const name = document.getElementById('name');


form.addEventListener('submit', (event) => {

    //blocco l'invio del form
    event.preventDefault();

    console.log("form inviato");

    //selettori di output e inserisci i valori presi dalgli input
    name.innerHTML = nomeCognomeField.value;

   
});