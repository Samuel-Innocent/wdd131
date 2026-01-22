const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Make sure your HTML ul has id="list"

button.addEventListener('click', function() {
  // Check if the input is not blank
  if (input.value.trim() !== '') {
    
    // 1. Create the elements
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    // 2. Populate content
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    
    deleteButton.setAttribute('aria-label', 'Remove ' + input.value); 
    // -------------------------------
    
    // 3. Append the button to the li
    li.append(deleteButton);
    
    // 4. Append the li to the list
    list.append(li);
    
    // 5. Add the delete button event listener
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // 6. Clear the input
    input.value = '';
  }
  
  // 7. Set focus back to the input regardless of what happened
  input.focus();
});