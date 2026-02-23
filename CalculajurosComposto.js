function calculajurosComposto(capital, taxa, tempo){
    let juros = capital * (1 +(taxa /100)) ** tempo;
    let montante = capital + juros;

    return montante;
}

let conta1 = calculajuroSimples(5000, 4, 6);
console.log("O montante é R$" + conta1.toFixed(2));