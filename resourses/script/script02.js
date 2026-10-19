let jogos = [
"Minecraft",
"The Sims",
"Roblox",
"Terraria",
"Stardew Valley"
];

let quest = prompt("Digite o nome do jogo e confira se ele está na lista:")

let jogo = jogos.find(jogo =>
    jogo.toLocaleLowerCase().includes(quest.toLocaleLowerCase().trim()))

    if(jogo === undefined){
        prompt("O jogo não está na lista!")
    }
    else{
        prompt("O jogo " + jogo+ " está na lista!")
    }