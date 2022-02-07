//JSnack2
const squadreCalcio = [
   
    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0
    },
   
    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0
    },
   
    {
        nome: 'Roma',
        punti: 0,
        falliSubiti: 0
    },
   
    {
        nome: 'Juve',
        punti: 0,
        falliSubiti: 0
    },
   
    {
        nome: 'Napoli',
        punti: 0,
        falliSubiti: 0
    }
]

function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

function squadraFalli(myArrayTeam) {

    let ritorno = [];

    for (let i=0;i<myArrayTeam.length; i++) {

        myArrayTeam[i]['punti'] = randomNumber(1,90);

        myArrayTeam[i]['falliSubiti'] = randomNumber(1,50);

        const {nome, falliSubiti} = myArrayTeam[i];

        ritorno.push({nome, falliSubiti});
    }

    return ritorno;

}

const nuovoArray = squadraFalli(squadreCalcio);
//così ho un nuovo array di oggetti
console.log(nuovoArray);