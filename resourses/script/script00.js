let tentativa = true
let contador = 3
let senha = "gg1234"
while(contador != 0){
let login = prompt("Digite a senha")
if (login === null){
    prompt("senha vazia!")
}
else if(login != senha){
    contador = contador + -1
    prompt("Senha incorreta! Você possui mais " + contador + " tentativas!")
}
else{
    prompt("Senha correta!")
    contador = 0
}
}