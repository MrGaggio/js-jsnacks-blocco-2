/*Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */


//creato array di oggetti

/* const bike = [
    {
        nome: 'Atala',
        peso: 5
    },

    {
        nome: 'Bianchi',
        peso: 10
    },

    {
        nome: 'Canondale',
        peso: 4
    }

]

/* 

console.log(bici);

const peso = document.querySelector([0], ".peso")
console.log("peso"); */

/*
 // prendere una bici di riferimento
let lightestBike =  bicycles[0]

 // cilclare tra le bici
for (let i = 0; i < bicycles.length; i++) {
    const bike = bicycles[i];
    console.log(bike.weight < lightestBike.weight);
    
}
 // verificare se la bici corrente è più leggera di quella selezionata
 if (bike.weight < lightestBike.weight) {
     lightestBike = bike
 }; */



 const teams = [
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },

    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },

    {
        nome: 'Cagliari',
        punti: 0,
        falli: 0
    },

    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
]




// Generare numeri random al posto degi 0 nelle proprietà: punti fatti e falli subiti


// generare numeri random  tra un minimo e un massimo di 10

/*
const punti = Math.floor(Math.random() * 11);
teams[0].punti.push.(Math.floor(Math.random() * 11);

console.log(punti);

const falli = Math.floor(Math.random() * 11);

// pushare il valore ottenuto all'interno di punti e falli

*/

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.punti = Math.floor(Math.random() * 11);
    team.falli = Math.floor(Math.random() * 11);
}

console.log(teams);