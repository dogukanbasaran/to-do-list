const taskInput = document.querySelector(".task-input input");
const addButton = document.getElementById("add-btn");
const tasks = document.getElementById("tasks");
const emptySpan = document.querySelector(".task-list ul > span");
const errorContainer = document.querySelector("#errorMessage .container");

addButton.addEventListener("click", () => {
   if(taskInput.value != ""){
      localStorage.setItem(taskInput.value, taskInput.value);
      location.reload();
   }
   else{
     errorHandler();
   }
});

function errorHandler(){
   errorContainer.style.visibility = "visible";
   setTimeout(() => {
      errorContainer.style.visibility = "hidden";
   }, 1000);
}

window.onload = () => {
   for(let i = 0;  i < localStorage.length; i++){
      const  taskName = localStorage.key(i);
      const newListItem = document.createElement("li");
      const div1 = document.createElement("div");
      newListItem.appendChild(div1);
      const checkBtn = document.createElement("span");
      checkBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
      checkBtn.style.fontSize = "24px";
      checkBtn.style.cursor = "pointer";
      div1.appendChild(checkBtn);
      const task = document.createElement("span");
      task.innerHTML = `${localStorage.getItem(taskName)}`;
      task.style.width = "80%";
      div1.appendChild(task);
      const liButton = document.createElement("button");
      div1.appendChild(liButton);
      let buttonIcon = document.createElement("i");
      buttonIcon.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;
      liButton.appendChild(buttonIcon);
      tasks.appendChild(newListItem);

      checkBtn.addEventListener("click", () => {

         function done(){
            task.style.textDecoration = "line-through";
            task.style.color = "grey";
            checkBtn.style.color = "grey";
         }

         function notDone(){
            task.style.textDecoration = "none";
            task.style.color = "black";
            checkBtn.style.color = "black";
         }

         task.style.textDecoration == "line-through" ? notDone() : done();
      });

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
            });
            
            // DETAILS (REMOVING AND EDITING A TASK) IN A SECOND DIV
            newListItem.style.height = "80px";
            newListItem.style.padding = "10px";
         
            const div2 = document.createElement("div");
            div2.style.justifyContent = "end";
            div2.style.gap = "5px";
            newListItem.appendChild(div2);

            const editBtn = document.createElement("button");
            editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
            div2.appendChild(editBtn);

            const saveBtn = document.createElement("button");
            saveBtn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i>`;
            div2.appendChild(saveBtn);
            saveBtn.style.display = "none";

            const editInput = document.createElement("input");
            editInput.placeholder = "type a new task";

            editBtn.addEventListener("click", () => {
               editBtn.style.display = "none";
               saveBtn.style.display = "block";
               closeBtn.disabled = true;
               div1.replaceChild(editInput, task);
            });

            saveBtn.addEventListener("click", () => {
               if(editInput.value != ""){
                  saveBtn.style.display = "none";
                  editBtn.style.display = "block";
                  closeBtn.disabled = false;
                  localStorage.removeItem(task.textContent);
                  task.textContent = editInput.value;
                  localStorage.setItem(task.textContent, task.textContent);
                  div1.replaceChild(task, editInput);
               }
               else{
                  errorHandler();
               }
            });
      
        
            const removeBtn = document.createElement("button");
            removeBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            div2.appendChild(removeBtn);

            removeBtn.addEventListener("click", () => {
               localStorage.removeItem(taskName);
               location.reload();
            });
       });
   };
};


