const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const task = todoInput.value.trim();
    if (task !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task}</span><button onclick="removeTodo(this)">Remove</button>`;
        todoList.appendChild(li);
        todoInput.value = "";
    }
}

function removeTodo(element) {
    const li = element.parentElement;
    todoList.removeChild(li);
}
