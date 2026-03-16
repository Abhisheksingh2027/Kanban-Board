const addBtn = document.getElementById("addTask");
const input = document.getElementById("taskInput");

let taskId = 0;

addBtn.addEventListener("click", addTask);

function addTask(){

const text = input.value.trim();

if(text === "") return;

const task = document.createElement("div");
task.className = "task";
task.draggable = true;
task.id = "task"+taskId++;

task.innerHTML = `
<span>${text}</span>
<button class="delete">X</button>
`;

task.addEventListener("dragstart", dragStart);

task.querySelector(".delete").addEventListener("click", ()=>{
task.remove();
});

document.getElementById("todo").appendChild(task);

input.value="";
}

function dragStart(e){
e.dataTransfer.setData("text/plain", e.target.id);
}

const lists = document.querySelectorAll(".task-list");

lists.forEach(list => {

list.addEventListener("dragover", e=>{
e.preventDefault();
});

list.addEventListener("drop", e=>{
e.preventDefault();

const id = e.dataTransfer.getData("text/plain");
const task = document.getElementById(id);

list.appendChild(task);

});

});