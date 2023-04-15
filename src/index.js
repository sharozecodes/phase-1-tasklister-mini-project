document.addEventListener("DOMContentLoaded", () => {
    addingEventListeners();

});

function addingEventListeners(){
    document
    .querySelector("#create-task-form")
    .addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e){
    e.preventDefault();
    const task = e.target[0].value;
    const priorityLevel = parseInt(e.target[1].value);
    if(task === '') {
        alert("Please enter something.")
    } else {
        displayTask(task, priorityLevel);
    }
    e.target.reset();
}

function displayTask(task, priorityLevel){
    const taskUl = document.getElementById("tasks");
    const taskLi = document.createElement("li");
    const deleteBtn = document.createElement("button");


    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteTask)

    taskLi.textContent = task + " ";
    taskLi.style.color = getPriorityColor(priorityLevel);
    taskLi.appendChild(deleteBtn);
    taskUl.appendChild(taskLi);
}

function deleteTask(e){
  e.target.parentNode.remove();
}

function getPriorityColor(priorityLevel) {
    if (priorityLevel === 1) {
        return "red";
    } else if (priorityLevel === 2) {
        return "yellow";
    } else {
        return "green";
    }
}

