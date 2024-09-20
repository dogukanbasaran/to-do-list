const taskInput = document.querySelector(".task-input input");
const addButton = document.getElementById("add-btn");
const tasks = document.getElementById("tasks");
const emptySpan = document.querySelector(".task-list ul > span");







addButton.addEventListener("click", () => {
   if(taskInput.value != ""){
    const newListItem = document.createElement("li");
    const div1 = document.createElement("div");
    newListItem.appendChild(div1);

    const task = document.createElement("span");
    task.innerHTML = `${taskInput.value}`;
    div1.appendChild(task);

    const liButton = document.createElement("button");
    div1.appendChild(liButton);

    liButton.addEventListener("click", () => {

      liButton.style.display = "none";

      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      div1.appendChild(closeBtn);
      closeBtn.addEventListener("click", () => {
         newListItem.style.height = "40px";
         div2.style.display = "none";
         closeBtn.style.display = "none";
         liButton.style.display = "block";
      })

      // liButton.disabled = true;
      // liButton.style.cursor = "not-allowed";
   
      const nli = newListItem.style;
      nli.height = "80px";
      nli.padding = "10px";
   
      const div2 = document.createElement("div");
      div2.style.justifyContent = "end";
      newListItem.appendChild(div2);
   
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      div2.appendChild(removeBtn);
      removeBtn.addEventListener("click", () => {
         tasks.removeChild(newListItem);
      });
   
    });

    
   
    let buttonIcon = document.createElement("i");
    buttonIcon.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;
    liButton.appendChild(buttonIcon);

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


