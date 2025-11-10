
function addtask(){

    let input = document.getElementById('todoInput');
    let newtodo = input.value.trim();

    if(newtodo == ""){
        return alert('enter a task')
    }

    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(newtodo);

    localStorage.setItem('todos',JSON.stringify(todos));

    input.value = '';
    showtodo();
    
}

function showtodo(){

    let todos = JSON.parse(localStorage.getItem('todos'))  || [];
    let list = document.getElementById('todoList')
    list.innerHTML = ''

    todos.forEach((todo,index)=> {

    let li = document.createElement("li");
    li.textContent = todo;
        
    let editbtn = document.createElement('button');
    editbtn.textContent = 'edit';
    editbtn.className = 'editbtn';

    editbtn.onclick = function() {
      let newtext = prompt("Edit task:", todo);
      if(newtext && newtext.trim() != ''){
        todos[index] = newtext.trim();
        localStorage.setItem('todos',JSON.stringify(todos));
        showtodo()
      }
    }

    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'delete';
    deletebtn.className = 'deletebtn';

    deletebtn.onclick = function() {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      showtodo();
    }

    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    list.appendChild(li)
  });

}

showtodo();
