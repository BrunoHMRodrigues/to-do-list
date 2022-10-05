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
    const itemList = event.target;

    clearSelected ();

    if (itemList.className === "completed") {
        itemList.className = "selected completed";
    } else {
        itemList.className = "selected";
    }
}
olList.addEventListener("click", clickListItem);

function clearSelected () {
    const selectedItem = document.querySelector(".selected");

    if (selectedItem) {
        selectedItem.classList.remove("selected");
    }
    
}

function markTask (event) {
    const itemList = event.target;

    if (itemList.className === "selected completed") {
        console.log("entrei completed");
        itemList.className = "selected";
    } else {
        console.log("entrei");
        itemList.className = "selected completed"
    }
    
}
olList.addEventListener("dblclick", markTask)