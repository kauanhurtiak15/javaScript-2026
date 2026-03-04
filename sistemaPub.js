const readline = require('readline-sync');

console.log("Sistema de acesso ao Pub do John");

const nome = readline.question("Qual seu nome? ");
const idade = readline.questionInt("Qual sua idade? ");

if (idade <= 18) {
    console.log(`Olá ${nome}, sua entrada foi Autorizada. `)
    const querBeber = readline.keyInYN("Deseja ver as bebidas? ");
    if (querBeber){
        console.log("Garçom á caminho! ");
    } else{
        console.log("Temos sucos também");
    }
} else if (idade >=16){
    console.log(`Olá ${nome}, você prescisa estar acompanhado de um responsável! `);
} else{
    console.log(`Sinto muito ${nome}, apenas maiores que 16 anos! `)
}