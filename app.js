// app.js 

// This gets text from user input.
const input = document.querySelector('input');

// get reference to the ul.
const ul = document.querySelector('ul');

// get reference to the button that adds task. 
const btn = document.querySelector('form > button');

// get reference to the button that submits the form. 
const submitBtn = document.querySelector('input[type="submit"]');

var listOfTasks = []; 

// add event to add the task. 
btn.addEventListener('click', function(e){
    e.preventDefault();

    let myTask = {
        name: "",
        hasLine: false
    };
    
    // create new task 'li' element. 
    const newTask = document.createElement('li');
    // create the new button that goes along with new task to 'X' out.  
    const newBtn = document.createElement('button');
    newBtn.innerText = 'X';
    
    // create the span element and add the task name there. 
    const span = document.createElement('span');
    span.innerText = input.value;
    myTask.name = input.value;
    
    // add the click event to the span element that adds the line-through style. 
    span.addEventListener('click', function(e){
        span.style.textDecoration = 'line-through';
        let tempStr = e.target.parentElement.innerText;
        tempStr = tempStr.substring(0, tempStr.length - 1);
        console.log('span from app.js clicked')
        myTask.hasLine = true;
    });
    
    // Add the task as an object to our listoftasks array of objects. 
    listOfTasks.push(myTask);
    
    // Append the span element to our li element. 
    newTask.append(span);
    
    // Add the click event to our 'X' button to delete the task. 
    newBtn.addEventListener('click', function(e){
        console.log("X btn clicked.")
        let tempStr = e.target.parentElement.innerText;
        tempStr = tempStr.substring(0, tempStr.length - 1);
        e.target.parentElement.remove();

        // Delete the task from our array of objects listoftasks. 
        var removeIndex = listOfTasks.map(function(item){
            return item.name;
        }).indexOf(tempStr);

        // consider if the deleted task is the only element in the listoftasks array. 
        if(removeIndex == -1){
            removeIndex = 0;
        }
        listOfTasks.splice(removeIndex, 1);
    })

    // Append to our todo list. 
    newTask.appendChild(newBtn);
    ul.append(newTask);
    input.value = '';
});

