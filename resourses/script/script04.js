let tarefas = [
  "Estudar HTML",
  "Estudar CSS",
  "Praticar JavaScript",
  "Estudar Laravel",
  "Revisar conteúdo"
];

let active = true;

while (active) {
  let menu = prompt(
    "Escolha uma opção:\n1 - Remover tarefa\n2 - Adicionar tarefa\n3 - Atualizar tarefa\n0 - Sair"
  );
  
  if (menu === null) {
    active = false;
    break;
  }

  let opcao = Number(menu);

  switch (opcao) {
    case 1:
      alert("Tarefas atuais:\n" + tarefas.join("\n"));
      
      let quest = prompt("Digite o nome da tarefa que deseja remover:");
      if (quest) {
        let indextarefa = tarefas.findIndex(
          (tarefa) => tarefa.toLowerCase().includes(quest.toLowerCase().trim())
        );

        if (indextarefa !== -1) {
          tarefas.splice(indextarefa, 1); 
          alert("Tarefa removida com sucesso!");
        } else {
          alert("Tarefa não encontrada!");
        }
      }
      break;

    case 2:
      let novaTarefa = prompt("Digite a tarefa a ser adicionada:");
      if (novaTarefa) {
        tarefas.push(novaTarefa); 
        alert("Tarefa adicionada com sucesso!");
      }
      break;

    case 0:
      active = false;
      alert("Saindo do programa...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
}