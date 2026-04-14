// Seleciona os elementos do DOM
const inputTarefa = document.getElementById("novaTarefa");
const btnAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("listaTarefas");

// Função para adicionar tarefa
function adicionarTarefa() {
  const textoTarefa = inputTarefa.value.trim();

  // Verifica se o input não está vazio
  if (textoTarefa === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  // Cria o elemento li
  const li = document.createElement("li");
  li.textContent = textoTarefa;

  // Evento de 1 clique - marcar como concluída
  li.addEventListener("click", function () {
    this.classList.toggle("concluida");
  });

  // Evento de duplo clique - remover tarefa
  li.addEventListener("dblclick", function () {
    this.remove();
  });

  // Adiciona o item à lista
  listaTarefas.appendChild(li);

  // Limpa o input
  inputTarefa.value = "";

  // Foca novamente no input
  inputTarefa.focus();
}

// Evento de clique no botão
btnAdicionar.addEventListener("click", adicionarTarefa);

// Evento de pressionar Enter no input
inputTarefa.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});
