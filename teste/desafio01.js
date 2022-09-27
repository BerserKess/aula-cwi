//DESAFIO INSS

//função para casas decimais sem arredondar
function ajustarCasas(numeroDecimal, casasDecimais) {
    const ordemGrandeza = Math.pow(10, casasDecimais)
    return Math.floor(numeroDecimal * ordemGrandeza) / ordemGrandeza;
  }

  function contribuicao (s){
    // Verificar quanto é a contribuição ao INSS
    if (s <= 1045){   
        contribuicaoMensal =  s * 0.09
        contribuicaoAnual = contribuicaoMensal * 13.3
        qtdPessoas = s / contribuicaoMensal
    }
    else if (s < 2089.60){
        contribuicaoMensal =  s * 0.09
        contribuicaoAnual = contribuicaoMensal * 13.3
        qtdPessoas = s / contribuicaoMensal
    }
    else if (s < 3134.40){
        contribuicaoMensal =  s * 0.12
        contribuicaoAnual = contribuicaoMensal * 13.3
        qtdPessoas = s / contribuicaoMensal
    
    }
    else if (s < 6101.06){
        contribuicaoMensal =  s * 0.14
        contribuicaoAnual = contribuicaoMensal * 13.3
        qtdPessoas = s / contribuicaoMensal
    }
    else{
        salarioTeto = 6101.06
        contribuicaoMensal =  salarioTeto * 0.14
        contribuicaoAnual = contribuicaoMensal * 13.3
        qtdPessoas = s / contribuicaoMensal
    }

    array = [ajustarCasas(contribuicaoMensal,2), ajustarCasas(contribuicaoAnual,2), ajustarCasas(qtdPessoas,2)]
    return array
  }

  console.log(contribuicao(3500))
