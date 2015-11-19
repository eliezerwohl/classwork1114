
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


document.getElementById("goRow").addEventListener("click", check)


function check () {
    if (document.getElementById("firstName").value == 0){
        prompt('you didn not enter a first name');
    }
   
  if (document.getElementById("lastName").value == 0) {
        prompt("you didn't enter a last name!");
    }

    if (document.getElementById("email").value == 0) {
        prompt("hey! enter a email!");
    }

    else {
        addRow()
    }
    // else { newRow()
    
}

//         function newRow() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell1.innerHTML = document.getElementById("firstName").value;
//     cell2.innerHTML = document.getElementById("lastName").value;
//     cell3.innerHTML = document.getElementById("email").value;
//     cell4.innerHTML = "<a href="#"> bong </a>";
// ;
// }


function addRow(){
  var myTable = document.getElementById('myTable');
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');


   var newRow = myTable.insertRow(myTable.rows.length - 1);

  for(var i=0; i<4; i++){
    var td = document.createElement('td');
    var delButton = document.createElement('button');

    if(i===0){
      td.textContent = firstName.value;
    }if(i===1){
      td.textContent = lastName.value;
    }if(i===2){
      td.textContent = email.value;
    }if(i===3){
      delButton.className += "warning delete-btn";
      delButton.textContent = 'X';
      td.appendChild(delButton);
      delButton.addEventListener('click', deleteRecord);
    }

    newRow.appendChild(td);
  }

}

// var myTimer = setInterval(function()
// { 
//     document.getElementById("myTable").deleteRow(1);   
// }, 10000);



