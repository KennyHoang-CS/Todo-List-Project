/* local-storage.js */


// Check if our localStorage has the user's todo list. 
if(localStorage.getItem('hasTodoList'))
{   
    // load data from the array listoftasks from localStorage. 
    console.log('Loading todo list from localStorage...');
    listOfTasks = JSON.parse(localStorage.getItem('listOfTasks')) || [];
   
    //  Add todo list back from localStorage.
    for(let i = 0; i < listOfTasks.length; i++){
        
        // Reshape our todo list from localStorage using the html elements. 
        const tempTask = document.createElement('li'); 
        const tempBtn = document.createElement('button');
        tempBtn.innerText = 'X';
        const tempSpan = document.createElement('span');
        tempSpan.innerText = listOfTasks[i].name;

        // Check if our tasks has a line-through style. 
        if(listOfTasks[i].hasLine === true)
        {
            tempSpan.style.textDecoration = 'line-through';
        } else{
            tempSpan.style.textDecoration = 'none';
        }

        // Add click event to our reshaped spans for line-through styles. 
        tempSpan.addEventListener('click', function(e){
            tempSpan.style.textDecoration = 'line-through';
            let tempStr = e.target.parentElement.innerText;
            tempStr = tempStr.substring(0, tempStr.length - 1);
            console.log('span from local-storage.js clicked')
            listOfTasks[i].hasLine = true;
        });
        
        tempTask.append(tempSpan);

        // Add the click event to our buttons to delete the tasks. 
        tempBtn.addEventListener('click', function(e){
            let tempStr = e.target.parentElement.innerText;
            tempStr = tempStr.substring(0, tempStr.length - 1);
            e.target.parentElement.remove();
       
            // Delete the task using a mapping function.
            var removeIndex = listOfTasks.map(function(item){
                return item.name;
            }).indexOf(tempStr);

            // Consider if the array has only one element. 
            if(removeIndex == -1){
                removeIndex = 0;
            }
    
            listOfTasks.splice(removeIndex, 1);
        });

        // Add to the todo list. 
        tempTask.appendChild(tempBtn);
        ul.append(tempTask);
        input.value = '';
    }
}

// Add the click event to our submit button to save data to localStorage. 
submitBtn.addEventListener('click', function(e){
    console.log('saving your todo list to localStorage...');
    // save the data from array to localStorage.
    localStorage.setItem('hasTodoList', true);
    localStorage.setItem('listOfTasks', JSON.stringify(listOfTasks)); 
});


