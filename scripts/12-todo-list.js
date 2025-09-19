const todoList = [{
   name : 'make dinner', 
   dueDate: '2022-12-10'
  }, { 
  name: 'wash dishes',
  dueDate: '2022-11-09'
} ];

renderTodoList();//to display the html

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject ,index) => {
      const { name, dueDate } = todoObject;
      //creates html through javaScript
      const html = `
                  <div> ${name} </div> 
                  <div> ${dueDate} </div>
                  <button class="delete-todo-button js-delete-todo-button">Delete</button>
                  `;  
      todoListHTML += html;
    })
  /*
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    //creates html through javaScript
    const html = `
                 <div> ${name} </div> 
                 <div> ${dueDate} </div>
                 <button class="delete-todo-button" onclick="
                  todoList.splice(${i}, 1);
                  renderTodoList();
                 ">Delete</button>
                `;  
    todoListHTML += html;
  }*/



  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deletebutton, index) => {
        deletebutton.addEventListener('click', () =>{
          todoList.splice(index, 1);
          renderTodoList();
        });
      });
}

document.querySelector('.js-add-todo-button').
  addEventListener('click', () => {
    addTodo();
  });


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');//to select the input box
  const name = inputElement.value;//to get input value from input box

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate
  });//add values to array

  inputElement.value = '';

  renderTodoList();
 
}