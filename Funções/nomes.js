function nomes(nomeFulano, nomeBeltrano){
    return nomeFulano == nomeBeltrano
}

mesmoNome = nomes("cwi", "reset")

if (mesmoNome){
    console.log("É o mesmo nome")
}
else{
    console.log("Nomes diferentes")
}