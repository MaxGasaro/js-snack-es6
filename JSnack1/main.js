const biciCorsa = [
    {
        nome: 'specialized',
        peso: 15
    },
    
    {
        nome: 'giant',
        peso: 15
    },

    {
        nome: 'scott',
        peso: 13
    },

    {
        nome: 'bianchi',
        peso: 16
    },

    {
        nome: 'rockrider',
        peso: 19
    },

    {
        nome: 'olmo',
        peso: 15
    }
]

let biciclettaPiuLeggera = biciCorsa[0];
console.log(biciclettaPiuLeggera['peso']);

for (let i=0;i<biciCorsa.length; i++) {

    let biciclettaAttuale = biciCorsa[i];
    //console.log(biciCorsa[i]);
    if (biciclettaPiuLeggera['peso'] > biciclettaAttuale['peso']) {
        biciclettaPiuLeggera = biciclettaAttuale;
    }
    

}
//console.log(peso);
let {nome,peso} = biciclettaPiuLeggera;
console.log(`La bicicletta più leggera è ${nome} e pesa ${peso} kg`);








