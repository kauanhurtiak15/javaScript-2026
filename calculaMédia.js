let nota1 = 8;
let nota2 = 7;
let nota3 = 4;
let nota4 = 9;

const nomeAluno = "Mailon";

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){
    console.log("O mailon está aprovado")
} 
if (media >= 5 && media < 7){
    console.log("O mailon está de se liga")
}
if (media < 5){
    console.log("O mailon está reprovado")
}

console.log("O aluno: " + nomeAluno);
console.log("Tem a média: " + media);