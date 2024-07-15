// Code your solutions in this file
const names = ['ben', 'james','luke'];
function writeCards(names, gift = 'surprise'){
    let message = [];
    for(let i= 0 ; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`)
    }
    return message;
}
//console.log(writeCards(names));

function countDown(number){
    while(number >= 0){
        console.log(number)
        number--
    }
}
countDown(11)
