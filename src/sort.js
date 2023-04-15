document.addEventListener("DOMContentLoaded", () => {
    addingEventListeners();

});

let taskObjArr = [];

function addingEventListeners(){
    document
    .querySelector("#create-task-form")
    .addEventListener('submit', handleFormSubmit);
    document.getElementById("sort-tasks")
    .addEventListener("change", sortTasks);
}

function handleFormSubmit(e){
    e.preventDefault();
    const task = e.target[0].value;
    const priorityLevel = parseInt(e.target[1].value);

    if(task === '') {
        alert("Please enter something.")
    } else {
        const taskObj = {task, priorityLevel};
        taskObjArr.push(taskObj);

        sortTasks();
        displayTasks();
    }
    e.target.reset();
}

function displayTasks(task, priorityLevel){
    const taskUl = document.getElementById("tasks");
    taskUl.textContent = "";

    taskObjArr.forEach((task) => {

        const taskLi = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x"
        deleteBtn.addEventListener("click", (e) => deleteTask(e,task))
    
        taskLi.textContent = task.task + " ";
        taskLi.style.color = getPriorityColor(task.priorityLevel);
        taskLi.appendChild(deleteBtn);
        taskUl.appendChild(taskLi);
    })



}

function deleteTask(e, task){
    taskObjArr = taskObjArr.filter((element) => element.task !== task.task)
    e.target.parentNode.remove();

}

function getPriorityColor(priorityLevel) {
    if (priorityLevel === 1) {
        return "red";
    } else if (priorityLevel === 2) {
        return "blue";
    } else {
        return "green";
    }
}


function sortTasks() {
    const sortTasksSelect = document.getElementById("sort-tasks")
    if (sortTasksSelect.value === "h-l"){
        taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
    } else {
        taskObjArr.sort((a, b) => b.priorityLevel - a. priorityLevel)
    }
    console.log(taskObjArr)
    displayTasks()
}