document.getElementById('MyButtton1').addEventListener('click', function() {
  document.getElementById('output').textContent = 'You buy a dog, we appreciate it, thank you)';
});

document.getElementById('submitButton').addEventListener('click', function() {
  const textInputValue = document.getElementById('textInput').value;
  
  document.getElementById('output1').textContent = textInputValue;
  
 
  
});