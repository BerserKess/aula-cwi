peso = 150
altura = 1.82
imc = peso / Math.pow(altura, 2)
obesidade = 0

if (imc < 18.50) {
    console.log("Seu imc é:" + imc +" e sua classificação é Magreza")
}
else if (imc >= 18.50 && imc <= 24.99){
    console.log("Seu imc é:" + imc +" e sua classificação é Normal")
}
else if (imc >= 25.00 && imc <= 29.99){
    obesidade = 1
    console.log("Seu imc é:" + imc +" e sua classificação é Sobrepeso")
    console.log ("Cuidado! Você está acima do peso recomendado pela OMS.")
}
else if (imc >= 30.00 && imc <= 39.99){
    obesidade = 2
    console.log("Seu imc é:" + imc +" e sua classificação é Obesidade")
    console.log ("Cuidado! Você está acima do peso recomendado pela OMS.")
}
else if (imc >= 40.00){
    obesidade = 3
    console.log("Seu imc é:" + imc +" e sua classificação é Obesidade grave")
    console.log ("Cuidado! Você está acima do peso recomendado pela OMS.")
    console.log ("É importante procurar um médico para avaliar sua saúde.")
}