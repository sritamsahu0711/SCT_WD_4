const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  const dateTime = taskDateTime.value;

  if (taskText === "" || dateTime === "") return;

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = `${taskText} - ${new Date(dateTime).toLocaleString()}`;
  li.appendChild(taskSpan);

  const actions = document.createElement("div");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    taskSpan.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    const newTime = prompt("Edit date/time:", dateTime);
    if (newTask && newTime) {
      taskSpan.textContent = `${newTask} - ${new Date(newTime).toLocaleString()}`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(actions);

  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
});
