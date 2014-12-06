// to do list
//<li><input type="checkbox"><span>something something</span></li>

// function addToList(list, itemText){

//   var createCheckbox = document.createElement('input');
//   createCheckbox.type = 'checkbox';
//   var listItem = document.createElement('li');
//   // var createspan = document.createElement('span');
//   // createspan.innerText = itemText ;
// var inItemText = document.createElement('input');

// inItemText.type = 'text';
//   listItem.appendChild(inItemText);
//   listItem.appendChild(createCheckbox);
//   inItemText.appendChild(createspan);
//   list.appendChild(listItem);
// }
function updateCheckboxStatus() {
  var cbId = this.id.replace('cb_', '');
  var listText = document.getElementById('node_', cbId );

  listText.style.textDecoration = 'line-through';
}

function addText(main){
    totalItems++;

    var input = document.getElementById('input').value;
    //document.getElementById('do').innerHTML = input;
    var node = document.createElement("P");
    node.id = 'node_'+ totalItems;
    var createCheckbox = document.createElement('input');
    createCheckbox.type = 'checkbox';
    createCheckbox.id = 'cb_'+ totalItems;
    createCheckbox.onclick = updateCheckboxStatus;

    node.appendChild(createCheckbox);
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    var toDo = document.getElementById('do');
    toDo.appendChild(node);
    var hr = document.createElement('hr');
    toDo.appendChild(hr);
}

var totalItems = 0;
input.addEventListener('keyup', function(e) {
//   var textnode = document.createTextNode(input);
// //   console.log(2);
  if(event.which == 13) {
    var input = document.getElementById('input').value;
    if (!input || input == '') {
      return false;
    }
    addText(document.getElementById('main'));
  }


});
$(document).ready(function() {
  $('#main').hide();
  $('#btn').click(function() {
    $('#main').toggle('slow');
  });
});

