const status = "Todo" || "Done";

let todos = [];

function addOne(newToDo) {
  todos.push(newToDo);
}

function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}
function deleteOne(index) {
  let temp = [];
  for (let i = 0; i < todos.length; i++) {
    if (i != index) {
      temp.push(todos[i]);
    }
  }
  todos = temp;
}

function reName(index, name) {
  let item = todos[index];
  item.name = name;
}
// to do add
// ner uurchluh

addOne({ name: "Geree tseverleh", status: "todo" });
addOne({ name: "Shalgaltandaa beldeh", status: "todo" });
addOne({ name: "Usand oroh", status: "todo" });
editStatus(1, "Done");

reName(1, "Hicheelee davtah");

console.log(todos);

deleteOne(2);
console.log(todos);

function deleteAll() {
  todos = [];
}

function countDone() {
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    if (item.status === "Done") {
      count++;
    }
  }
  return count;
}
console.log(countDone());
const completedTask = countDone();
