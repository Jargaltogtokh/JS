const STATUS = "TODO" || "DONE";
let todos = [];
let blocked = [];
let done = [];
let inprogress = [];

function render() {
  document.getElementById("todo-tasks").innerHTML = "";
  document.getElementById("in-progress-tasks").innerHTML = "";
  document.getElementById("done-tasks").innerHTML = "";
  document.getElementById("blocked-tasks").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const containerName = todos[i].status;
    const name = `${containerName}-tasks`;
    const tasklist = document.getElementById(name);

    const item = todos[i];

    //Create task item
    const element = document.createElement("div");
    element.classList.add("todo-item");

    //Create task name
    const titleEl = document.createElement("p");
    titleEl.style.color = "#fff";
    titleEl.innerText = item.name;

    //Create edit button
    const btnEl = document.createElement("img");
    btnEl.src = "edit.png";
    btnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
      render();
    };

    //Delete
    const deletBtnEl = document.createElement("img");
    deletBtnEl.src = "bin.png";
    deletBtnEl.onclick = function () {
      deleteOne(i);
      render();
    };

    element.appendChild(titleEl);
    element.appendChild(btnEl);
    element.appendChild(deletBtnEl);
    tasklist.appendChild(element);
  }
}
function addToDo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
  // const input = prompt("Enter todo name");
  // todos.push({ name: input, status: "TODO" });
  // render();
}

// function editStatus(index, status) {
//   let item = todos[index];
//   item.status = status;
// }
function deleteOne(index) {
  let temp = [];
  for (let i = 0; i < todos.length; i++) {
    if (i != index) {
      temp.push(todos[i]);
    }
  }
  todos = temp;
  render();
}

function editName(index, newName) {
  todos[index].name = newName;
  render();
}

// function deleteAll() {
//   todos = [];
//   render();
// }

// function countDone() {
//   let count = 0;
//   for (let i = 0; i < todos.length; i++) {
//     let item = todos[i];
//     if (item.status === "DONE") {
//       count++;
//     }
//   }
//   return count;
// }

function saveToDo() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  todos.push({ name: inputValue, status: statusValue });

  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  render();
}
