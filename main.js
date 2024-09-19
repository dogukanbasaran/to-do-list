const taskInput = document.querySelector(".task-input input");
const addButton = document.getElementById("add-btn");
const tasks = document.getElementById("tasks");
const emptySpan = document.querySelector(".task-list ul > span");



addButton.addEventListener("click", () => {
   if(taskInput.value != ""){
    let newListItem = document.createElement("li");
    newListItem.innerHTML = `${taskInput.value} <button><i class="fa-solid fa-ellipsis-vertical"></i></button>`;
    tasks.appendChild(newListItem);
    tasks.removeChild(emptySpan);
   }
   else{
    alert("you have to add at least 1 task.")
   }
});

addButton.addEventListener("click", () => {
   taskInput.value = "";
})