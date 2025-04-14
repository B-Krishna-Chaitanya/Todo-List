const todoList =JSON.parse(localStorage.getItem('task')) || [];

function renderTodoList() {
  let todoListHTML = ''; 

  for (let i=0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div> ${dueDate}</div> 
      <button class="delete-todo-button js-delete-todo-button">Delete
      </button>  
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index) => {
    deleteButton.addEventListener('click',() => {
      todoList.splice(index,1);
      renderTodoList();
    })
  });
}

//instead of onclick attribute in html use addEventListener
document.querySelector('.js-add-todo-button').addEventListener('click',() => {
  addToDo();
});

//to display to do list just after opening the webpage i.e., already existing tasks
renderTodoList();

function addToDo() {
  const nameInputElement = document.querySelector('.js-name-input');
  const name = nameInputElement.value;

  const dueDateInputElement = document.querySelector('.js-dueDate-input');
  const dueDate = dueDateInputElement.value;

  const object = {name, dueDate}; //used shorthand property of objects

  todoList.push(object); 

  saveToStorage();

  nameInputElement.value = null; // or inputElement.value = '';

  renderTodoList();
}

function saveToStorage() {
  localStorage.setItem('task', JSON.stringify(todoList));
}