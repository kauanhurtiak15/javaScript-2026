function calculadoraIMC(peso, altura){
    let imc = peso / (altura ** 2);

    console.log("Seu IMC é, " + imc);

    if (imc < 18.5){
        console.log("Classificação: Abaixo do Peso");
    }
    else if (imc >= 18.5 && imc <= 24.9){
        console.log("Classificação: Peso Normal");
    }
    else if (imc >= 25 && imc <= 29.9){
        console.log("Classificação: Sobrepesso");
    }
    else{
        console.log("Classificação: Obesidade")
    }
}

calculadoraIMC(80, 1.84)