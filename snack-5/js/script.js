/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un firstName, un cogfirstName e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */


const people = [
    { firstName: 'Donato', lastName: 'Montrone', age: 27 },
    { firstName: 'Alessio', lastName: 'Napoletano', age: 12 },
    { firstName: 'Lorenzo', lastName: 'Ognibene', age: 26 },
    { firstName: 'Giada', lastName: 'Gallitto', age: 24 },
    { firstName: 'Monica', lastName: 'De Bona', age: 25 },
    { firstName: 'Sara', lastName: 'Donzellini', age: 30 },
    { firstName: 'Giulia', lastName: 'Ballestero', age: 17 },
    { firstName: 'Matteo', lastName: 'Carbone', age: 17 },
    { firstName: 'Sebastiano', lastName: 'Calella', age: 25 },
    { firstName: 'Andrea', lastName: 'Fumagalli', age: 14 },
    { firstName: 'Francesco', lastName: 'Trudu', age: 40 },
    { firstName: 'Riccardo', lastName: 'Nestola', age: 18 }
];

const licensed = people.filter((person) => person.age >= 18);

// const peopleLicensed = people.map((person) =>{
//     const isLicensed = person.age >= 18;
//     return `${person.firstName} ${person.firstName}, can drive? ${isLicensed}`
// });

// const peopleLicensed = people.map((person) =>{
// //     const isLicensed = person.age >= 18;
// //     return ${person.firstName} ${person.firstName}, ${isLicensed ? può giudare : non può giudare});


// // console.log(peopleLicensed);