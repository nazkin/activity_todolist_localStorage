//Page loads reach to local storage to get the to-dos 
// Create an element dynamically document.createElement('li')
//loop through the array creating an li for each array element
//Use appendChild() to add each list element
// Enter is a submitt event
//On submit we are 
//var tasks = localStorage.get 
//tasks.push()
//localStorage.set
//task will be an id and message 

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");



//Retrieve values from localStorage 
var storedNames = [""];
storedNames = JSON.parse(localStorage.getItem("tasks"));
todoCountSpan.textContent = storedNames.length;//counter for the number of lists in my todo
var item = [];//array to hold our list items
for(var x = 0; x < storedNames.length; x++) {
    item[x] = document.createElement("li");
    item[x].setAttribute("id", "list-" + x);
    item[x].textContent = storedNames[x];
    document.querySelector('#todo-list').appendChild(item[x]);
}

//Function to store input into our array 
todoInput.addEventListener('keypress', addFunc);

function addFunc(event) {
    if(event.keyCode === 13) {
        storedNames.push(todoInput.value);
    }
    //Set the todos array into local storage
    localStorage.setItem("tasks", JSON.stringify(storedNames));
}




