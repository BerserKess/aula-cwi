array = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
contador = 0
soma = 0

while (contador < array.length){
    soma += array[contador]
    contador++
}

media = soma / (array.length)
console.log(media)