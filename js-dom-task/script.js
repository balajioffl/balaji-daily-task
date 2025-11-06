const input = document.getElementById("textInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();

  if (taskText == "") {
    return alert("Task cannot be empty !");
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed", checkbox.checked);
  });

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.className = "edit-btn";
  editBtn.addEventListener("click", () => editTask(span));

  function editTask(span) {
    const newText = prompt("Enter the new task !", span.textContent);
    if (newText != "" && newText.trim() !== "") {
      span.textContent = newText;
    }
  }

  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.className = "delete-btn";

  delBtn.onclick = () => {
    const confirmDelete = confirm("Are you want to delete this task ?");
    if (confirmDelete) {
      li.remove();
    }
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  list.append(li);

  input.value = "";
}
