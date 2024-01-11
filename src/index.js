let nomeDoJogador = "Shann"
let nivelDoPersonagem = ""
rankDoJogador (0,3)

function rankDoJogador (vitoria, derrota){
    return resultado = vitoria - derrota
}

if(resultado <= 10 ){
    nivelDoPersonagem = "Ferro"
} else if(resultado >= 11 && resultado <= 20){
    nivelDoPersonagem = "Bronze"
} else if(resultado >= 21 && resultado <= 50){
    nivelDoPersonagem = "Prata"
} else if(resultado >= 51 && resultado <= 80){
    nivelDoPersonagem = "Ouro"
} else if(resultado >= 81 && resultado <= 90){
    nivelDoPersonagem = "Diamante"
} else if(resultado >= 91 && resultado <= 100){
    nivelDoPersonagem = "Lendário"
}  else {
    nivelDoPersonagem = "Imortal"
} 

console.log(`O Herói ${nomeDoJogador} tem de saldo de ${resultado} está no nível de ${nivelDoPersonagem}`)