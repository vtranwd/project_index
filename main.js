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

// delete and check
function deleteCheck(e) {
	const item = e.target;

	// delete item
	if (item.classList[0] === "delete_btn") {
		const todo = item.parentElement;

		// adding a fall animation transition to the delete function to make it fancy

		todo.classList.add("fall")
		todo.addEventListener('transitioned', function() {
			todo.remove()
		})
	}
	// complete item
	if (item.classList[0] === "complete_btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completedItem")
	}
}

function filterTodo(e){
	const todos = todoList.childNodes;
	for(let i = 0; i<todos.length; i++){
		switch(e.target.value){
			case "all":
			todos[i].style.display = "flex";
			break;
			case "completed":
			if(todos[i].classList.contains('completedItem')){
				todos[i].style.display = "flex";
			} else {
				todos[i].style.display = "none";
			}
			break;
			case "incomplete":
			if(!todos[i].classList.contains('completedItem')){
				todos[i].style.display = "flex";
			} else {
				todos[i].style.display = "none";
			}
			break;
		}
	}
}