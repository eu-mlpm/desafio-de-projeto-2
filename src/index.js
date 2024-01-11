//Defina o nome do Personagem
// E as vitorias e derratas no campo de rankDoJogador, sendo os números separados por virgulas e cada um representa vitórias e derrotas, respectivamente.

let nomeDoJogador = "Shann"
rankDoJogador (3,3)

let nivelDoPersonagem = ""
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

console.log(`O Herói ${nomeDoJogador} tem de saldo de ${resultado} e está no nível de ${nivelDoPersonagem}.`)