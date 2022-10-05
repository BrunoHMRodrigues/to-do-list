const buttonNewTask = document.getElementById("criar-tarefa");

function addTaskToList () {
    const inputBox = document.getElementById("texto-tarefa")
    const textInput = inputBox.value;    
    const fatherList = document.getElementById("lista-tarefas");
    const newLiItem = document.createElement("li");

    newLiItem.innerText = textInput;

    fatherList.appendChild(newLiItem);

    inputBox.value = "";
}
buttonNewTask.addEventListener("click", addTaskToList);

const olList = document.getElementById("lista-tarefas");
function clickListItem (event) {
    const itemLista = event.target;

    itemLista.style.backgroundColor = "gray";
}
olList.addEventListener("click", clickListItem);