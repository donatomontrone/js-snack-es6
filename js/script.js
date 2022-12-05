// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const studente = {
    name : 'Donato',
    lastname : 'Montrone',
    age : 27
}

for (const key in studente) {
    console.log(key + " => " + studente[key]);
}

const students = [{
    name : 'Donato',
    lastname : 'Montrone',
    age : 27
},
{
    name : 'Lorenzo',
    lastname : 'Ognibene',
    age : 25
}]

console.log(classe);

