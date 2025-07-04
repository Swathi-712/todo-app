function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;

  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}