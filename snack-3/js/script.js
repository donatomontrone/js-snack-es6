
/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */
const zucchini = [
    {
        type : 'tonda',
        weight : 20,
        length : 35
    },
    {
        type : 'trombetta',
        weight : 30,
        length : 40
    },
    {
        type : 'gialla',
        weight : 14,
        length : 42
    },
    {
        type : 'napoletana',
        weight : 13,
        length : 25
    },
    {
        type : 'tonda',
        weight : 24,
        length : 43
    },
    {
        type : 'trombetta',
        weight : 31,
        length : 31
    },
    {
        type : 'gialla',
        weight : 35,
        length : 23
    },
    {
        type : 'napoletana',
        weight : 23,
        length : 41
    },
    {
        type : 'tonda',
        weight : 19,
        length : 37
    },
    {
        type : 'trombetta',
        weight : 32,
        length : 28
    }];

let sumWeight = 0;
let mediaWeight = 0;

let sumLength = 0;
let mediaLength = 0;
for (let index = 0; index < zucchini.length; index++) {
    const currentZucchini = zucchini[index];
    sumWeight += currentZucchini.weight;
    mediaWeight = sumWeight / zucchini.length;

    sumLength += currentZucchini.length;
    mediaLength = sumLength / zucchini.length;
}


console.log(sumWeight + ' somma dei pesi');
console.log(mediaWeight + ' media dei pesi');

console.log(sumLength + ' somma delle lunghezze');
console.log(mediaLength + ' media delle lunghezze');


