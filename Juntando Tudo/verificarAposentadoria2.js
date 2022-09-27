colaboradores    = ['Rhoger',
 'Cléverson','Gleysberto','Nádio','Rosiméri','Regislane',
 'Agripino','Wellison', 'r']
idades = [69,66,58,61,60,64,59,55]
temposDeTrabalho = [31,29,30,26,25,24,26,29]
positivo = 0


function verificarAposentadoria(nome){
    // verificar se o nome ta na lista
    for(i = 0; i < colaboradores.length; i++){
        nomeColaborador = colaboradores[i]
        if (nome == nomeColaborador){
            positivo = 1
            indice = colaboradores.indexOf(nomeColaborador)
        }
    }
    // se tiver faça ação, se não, não faça
    if (positivo == 1){
        //pega o indice dos arrays
        idade = idades[indice]
        tempoTrabalho = temposDeTrabalho[indice]
        //verifica se pode ser aposentado ou não
        if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)){
            console.log("Parabéns, já pode sair de férias eternas :)")                 
        }
        else{
            console.log("Infelizmente para você, ainda falta um tempo :(")        
        }     
    }
    else{
        console.log("Colaborador Inválido :|")
    }
    return nome
    
}

verificarAposentadoria('Florisberto')
