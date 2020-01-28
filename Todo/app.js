const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

const CHECK = "fa fa-check-circle";
const UNCHECK ="fa-circle-thin";
const LINE_THROUGH = "lineThrough";

const options = {weekday : "long", month : "short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addTodo(todo, id, done, thrash) {
    if(thrash){ return; }
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const text =`<li class="item>
                    <i class="fa ${DONE} complete" job="complete" id="${id}></i>
                    <p class="text ${LINE}"> ${todo} </p>
                    <i class="fa fa-thrash-o delete" job="delete" id="${id}"></i>
                </li>
                    `
    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}
const list = document.getElementById("list");
list.addEventListener("click", function(event) {
    let element = event.target;
    const elementJob = event.target.attributes.job.value;
    if (elementJob == "complete") {
        completeTodo( element );
    } else if (elementJob == "delete") {
        removeTodo( element );
    }
})
// listening to the button to check if it is clicked or not
const input = document.getElementById("input");
document.addEventListener("keyup", function (event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if (toDo) {
            //setting the done and delete button to false when the user is yet to complete the task
            addTodo(toDo, id, false, false);
            LIST.push(
                {
                    name: toDo,
                    id: id,
                    done: false,
                    thrash: false
                }
            );
            input.value = "";
            // id++ help us to increment our id by one each time a todo is added
            id++;
        }
    }
});
function completeTodo( element ){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(" text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}
function removeTodo( element ) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].thrash = true;
}
