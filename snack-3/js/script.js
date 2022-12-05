
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
        brand : 'trombetta',
        weight : 30,
        length : 40
    },
    {
        brand : 'gialla',
        weight : 14,
        length : 42
    },
    {
        brand : 'napoletana',
        weight : 13,
        length : 25
    },
    {
        type : 'tonda',
        weight : 24,
        length : 43
    },
    {
        brand : 'trombetta',
        weight : 31,
        length : 31
    },
    {
        brand : 'gialla',
        weight : 35,
        length : 23
    },
    {
        brand : 'napoletana',
        weight : 23,
        length : 41
    },
    {
        type : 'tonda',
        weight : 19,
        length : 37
    },
    {
        brand : 'trombetta',
        weight : 32,
        length : 28
    }];

let sum =0;
for (let index = 0; index < zucchini.length; index++) {
    const currentZucchini = zucchini[index];
    sum += currentZucchini.weight
}


console.log(sum);


