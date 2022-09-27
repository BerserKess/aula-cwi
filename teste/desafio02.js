function encontrarPosicao (valorInicial, valorFinal, digito){
    let valores = [];
    let i = 0;
    let posicao = 0

    if (valorInicial == 1){
        i = valorInicial
        posicao = -1
    }

    for (i >= valorInicial; i <= valorFinal; i++){
    
        valores.push(i);
        if (valores.indexOf(i, valorInicial) == digito){
            posicao += digito
        }
    }
    return posicao;

}

console.log(encontrarPosicao(1, 18, 9))
