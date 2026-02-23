function calculajuroSimples(capital, taxa, tempo){
    let juros = capital * (taxa /100) * tempo;
    let montante = capital + juros;

    return montante;
}

let conta1 = calculajuroSimples(5000, 4, 6);
console.log("O montante é R$" + conta1);