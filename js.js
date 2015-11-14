debugger;
// get all of the delete buttons
var deleteButtons = document.getElementsByClassName("delete-btn");


// loop over delete buttons and add event listener
for(i = 0; i < deleteButtons.length; i++){
  deleteButtons[i].addEventListener("click", deleteRecord);
}


// function to delete row
function deleteRecord(){
  this.parentElement.parentElement.remove();
}