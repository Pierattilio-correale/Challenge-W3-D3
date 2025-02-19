const myForm = document.getElementById("taskform");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("vediamo se funziona il form");
  const task = document.getElementById("taskingadder");

  console.log(task);

  const newTask = document.createElement("div");
  newTask.innerHTML = `<ul><li>${task.value}</li></ul>
  <button onclick="deleteTask(event)">ELIMINA</button>
  `;

  const taskItem = newTask.querySelector("li");
  taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  const taskContainer = document.getElementById("task-container");
  taskContainer.appendChild(newTask);
  task.value = "";
});

const deleteTask = function (e) {
  console.log("ELIMINA", e.target.parentElement);

  const pressedButton = e.target;
  const taskToRemove = pressedButton.parentElement; // il contenitore del bottone
  taskToRemove.remove();
};
