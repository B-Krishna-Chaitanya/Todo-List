const todoList = [];

function renderTodoList() {
  let todoListHTML = ''; 

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div> ${dueDate}</div> 
      <button onclick="
          todoList.splice(${index},1);
          renderTodoList();
        " class="delete-todo-button">Delete
      </button>  
    `;
    todoListHTML += html;
  }
  );
  /*
  for (let i=0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div> ${dueDate}</div> 
      <button onclick="
          todoList.splice(${i},1);
          renderTodoList();
        " class="delete-todo-button">Delete
      </button>  
    `;
    todoListHTML += html;
  }
  */
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addToDo() {
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  const dueDateInputElement = document.querySelector('.js-dueDate-input');
  const dueDate = dueDateInputElement.value;

  todoList.push({name, dueDate}); //used shorthand property of objects

  nameInputElement.value = null; // or inputElement.value = '';

  renderTodoList();
}