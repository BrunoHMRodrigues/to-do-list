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

const buttonClear = document.getElementById("apaga-tudo");

function clearList () {
    const allLiItems = olList.childElementCount;

    for (let index = 0; index < allLiItems; index+=1) {
        olList.firstChild.remove();        
    }    
}
buttonClear.addEventListener("click", clearList);

const buttonClearCompleted = document.getElementById("remover-finalizados");

function removeCompletedTasks () {
    const completedItems = document.querySelectorAll(".completed");

    for (let index = 0; index < completedItems.length; index+=1) {
        completedItems[index].remove();        
    }
}
buttonClearCompleted.addEventListener("click", removeCompletedTasks);

const buttonSaveTasks = document.getElementById("salvar-tarefas");

function saveTasks () {
    // const listItems = document.querySelectorAll("ol li");
    // let arrayTasks = [];

    // for (let index = 0; index < listItems.length; index+=1) {
    //     arrayTasks[index] = listItems[index];        
    // }
    // localStorage.setItem("taskList", JSON.stringify(arrayTasks));

    const list = olList.innerHTML;
    localStorage.setItem("taskList", JSON.stringify(list));

}
buttonSaveTasks.addEventListener("click", saveTasks);

function retrieveStoragedTasks () {
    const savedTasks = JSON.parse(localStorage.getItem("taskList"));
    olList.innerHTML = savedTasks;
    // console.log(savedTasks);
    // if (savedTasks !== null) {

    //     for (let index = 0; index < savedTasks.length; index+=1) {
    //         const listItem = document.createElement("li")
    //         listItem = savedTasks[index]; // como pegar as propriedades do local storage? criar 2 storage? criar um sotore por propriedade que quero salvar?
    //         console.log(listItem);
    //         olList.appendChild(listItem);
    //     }        
    // }
}

function initiate () {
    retrieveStoragedTasks ();
}
window.onload = initiate ();