let inp = document.querySelector("input[type = 'text']");
let out = document.getElementById("tasks");
function getData() {
    out.innerHTML += 
    `<div id="task">
    <h3 style=" display: inline;"> ${inp.value} </h3>
    <button type="button" onclick="markDone(this)">Done</button>
    <button type="button" onclick="deleteTask(this)">Delete</button>
    </div>`;
    inp.value = "";
}


function markDone(button) {
    button.parentElement.classList.toggle("done");
}

function deleteTask(button) {
    button.parentElement.remove();
}

// let doneButt = document.querySelectorAll(".done-btn");
// doneButt.onclick = parentElement.classList.toggle("done")

// let deleteButtons = document.querySelectorAll(".delete-btn");
// deleteButtons.onclick = parentElement.remove();


