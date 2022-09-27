a = 3
b = 4
c = 5

if (a < b +c && b < a + c && c < a + b){
    if (a == b || a == c || b == c){
        console.log("isosceles")
    }
    else {
        if (a == b && a == c){
            console.log("equilátero")
        }
        else{
            console.log("escaleno")        
        }
    }
}

else{
    console.log("Não formam um triângulo")
}