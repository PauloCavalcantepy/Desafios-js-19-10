let produtos = ["Arroz","Feijão","Macarrão","Frango","Carne"]

produtos.forEach(produto =>
    prompt(produto)
)
prompt("Adicionando mais 3 produtos a lista...")
produtos.push("Sardinha")
produtos.push("Ovos")
produtos.push("Pipoca")

produtos.forEach(produto =>
    prompt(produto)
)
produtos.forEach(produto => 
console.log(produto)
)