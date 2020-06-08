const input =document.querySelector(".input");
const button=document.querySelector(".entry-btn");
const items=document.querySelector(".items");
const filters=document.querySelector(".filter-option");
const tes=document.querySelector(".cont");

items.addEventListener("click",deleteCheck);

filters.addEventListener("click",filterTodo);

const addTodo=(e)=>{
    e.preventDefault();

    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement("li");
    newTodo.classList.add("todo-list");
    newTodo.innerText=input.value;
    todoDiv.appendChild(newTodo);

    const todoButtonCheck=document.createElement("button");
    todoButtonCheck.classList.add("todo-check-btn");
    todoDiv.appendChild(todoButtonCheck);

    todoButtonCheck.innerHTML="<img src='./icons/check.png' class='todo-check'>";

    const todoButtonCross=document.createElement("button");
    todoButtonCross.classList.add("todo-cross-btn");
    todoDiv.appendChild(todoButtonCross);
    todoButtonCross.innerHTML="<img src='./icons/cross.png' class='todo-cross'>";
   
    items.append(todoDiv);
    input.value="";
}
button.addEventListener("click",addTodo);
document.querySelector(".entry-btn").addEventListener("keydown",function(e){
    if ((e.code === 'Enter' || e.code === 'NumpadEnter')) {
        addTodo();
      }
});

function deleteCheck(e){
    const selectedItem=e.target;
    if(selectedItem.classList[0]==="todo-cross"){
        const selTodo=selectedItem.parentNode.parentNode;
        selTodo.classList.add("fall");
        selTodo.addEventListener("transitionend",function(){
            selTodo.remove();
        })
        
    }

    if(selectedItem.classList[0]==="todo-check"){
        selectedItem.parentNode.parentNode.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos=items.childNodes;
    // const todos=todo.slice(1,items.childNodes.length);
    // console.log(todos);
    todos.forEach(function(todos){
        switch(e.target.value){
            case "all":
                todos.style.display='flex';
                break;
            case "completed":
                if(todos.classList.contains("completed")){
                    todos.style.display='flex';
                }else{
                    todos.style.display="none"
                }
                break;
            case "uncompleted":
                if(!todos.classList.contains("completed")){
                    todos.style.display="flex";
                }else{
                    todos.style.display="none"
                }
        }
    });
}