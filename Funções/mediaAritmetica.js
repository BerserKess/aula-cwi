function mediaAritmetica (notas){
    soma = 0
    // soma todos os elementos
    for (i = 0; i < notas.length; i++){
        soma += notas[i]
    }
    // divide pela quantidade de caracteres
    return soma / notas.length
    
}
notas = [1,2,3,4,5]
media = mediaAritmetica(notas)
console.log(media)