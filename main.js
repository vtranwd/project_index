const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');
// assigning addEventListener method to variables
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)

function addTodo(event) {
	event.preventDefault();
	// todo DIV
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	// todo List item (LI)
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo_item');
	todoDiv.appendChild(newTodo);
	if(todoInput.value === ""){
		return null;
	}
	// checkmark button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add('complete_btn')
	todoDiv.appendChild(completedButton);
	// delete button
	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
	deleteButton.classList.add('delete_btn')
	todoDiv.appendChild(deleteButton);
	// append to Actual List
	todoList.appendChild(todoDiv);
	// clear todo input value
	todoInput.value = ""
}

