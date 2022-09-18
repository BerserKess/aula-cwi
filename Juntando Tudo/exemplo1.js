colaboradores    = ['Rhoger',
 'Cléverson','Gleysberto','Nádio','Rosiméri','Regislane',
 'Agripino','Wellison']
idades = [69,66,58,61,60,64,59,55]
temposDeTrabalho = [31,29,30,26,25,24,26,29]


function verificarAposentadoria(idade, tempoTrabalho){
    
    if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)){
        
        console.log("Parabéns, já pode sair de férias eternas :)")
    }
    else{
        
        console.log("Infelizmente para você, ainda falta um tempo :(")
    }
    
}

for (i = 0; i < colaboradores.length; i++){
    console.log(colaboradores[i])
    console.log(verificarAposentadoria(idades[i], temposDeTrabalho[i]))
}