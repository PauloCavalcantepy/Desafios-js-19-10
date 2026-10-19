let livros = [
    "Memórias Póstumas de Brás Cubas",
    "O Alquimista",
    "Grande Sertão: Veredas",
    "O Cortiço",
    "Capitães da Areia",
    "Vidas Secas",
    "Dom Casmurro",
    "A Hora da Estrela",
    "Quincas Borba",
    "Iracema"
];
let quest = prompt("Digite o nome do livro para encontralo:")
let indexlivro = livros.findIndex(livro =>
    livro.toLocaleLowerCase().includes(quest.toLocaleLowerCase().trim()))
    if(indexlivro === undefined){
        prompt("Não foi possivel encontrar a possição do livro ou este livro não está na lista!")
    }
    else{
        prompt("O livro está na posição °"+ indexlivro+".")
    }