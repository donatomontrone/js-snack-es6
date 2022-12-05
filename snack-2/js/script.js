/*
!Crea un array composto da 10 automobili.
!Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const auto = [
    {
        brand : 'Mercedes',
        model : 'classe A AMG',
        type : 'benzina'
    },
    {
        brand : 'Mercedes',
        model : 'classe GLCe',
        type : 'elettrico'
    },
    {
        brand : 'Mercedes',
        model : 'classe GLE',
        type : 'diesel'
    },
    {
        brand : 'Audi',
        model : 'A1',
        type : 'gpl'
    },
    {
        brand : 'Audi',
        model : 'A3',
        type : 'metano'
    },
    {
        brand : 'Audi',
        model : 'Q8',
        type : 'benzina'
    },
    {
        brand : 'BMW',
        model : '120',
        type : 'diesel'
    },
    {
        brand : 'FIAT',
        model : 'Panda',
        type : 'metano'
    },
    {
        brand : 'FIAT',
        model : '500',
        type : 'elettrico'
    },
    {
        brand : 'Jeep',
        model : 'Wrangler',
        type : 'benzina'
    },
];

const dieselAuto =[];
const benzinaAuto = [];
const otherAuto = [];

for (let index = 0; index < auto.length; index++) {
    const currentAuto = auto[index];
    if (currentAuto.type === 'benzina') {
        benzinaAuto.push(currentAuto);
    } else if (currentAuto.type === 'diesel'){ 
        dieselAuto.push(currentAuto);
    } else {
        otherAuto.push(currentAuto)
    }
}


console.log(auto);
console.warn(dieselAuto);
console.error(benzinaAuto);
console.warn(otherAuto);

