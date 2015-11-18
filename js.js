
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



document.getElementById("goRow").addEventListener("click", goRow)



function goRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById("firstName").value;
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "New cell3";
    cell4.innerHTML = "new cell4";
}



var myTimer = setInterval(function()
{ 
    document.getElementById("myTable").deleteRow(1);   
}, 10000);



