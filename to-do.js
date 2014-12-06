// to do list

function updateCheckboxStatus(createCheckbox) {
  console.log(createCheckbox.id);
  var cbId = this.id.replace('cb_', '');
  var listText = document.getElementById('node_', cbId );

  listText.style.textDecoration = 'line-through';
}

function addText(main){
  totalItems++;

  var input = document.getElementById('input').value;
  var node = document.createElement("P");
  node.id = 'node_'+ totalItems;
  var createCheckbox = document.createElement('input');
  createCheckbox.type = 'checkbox';
  createCheckbox.id = 'cb_'+ totalItems;
  createCheckbox.onclick = updateCheckboxStatus();

  node.appendChild(createCheckbox);
  var textnode = document.createTextNode(input);
  node.appendChild(textnode);
  var toDo = document.getElementById('do');
  toDo.appendChild(node);
  var hr = document.createElement('hr');
  toDo.appendChild(hr);
}

var totalItems = 0;

//event.which == 13 refers to Enter key
input.addEventListener('keyup', function(e) {
  if(event.which == 13) {
    var input = document.getElementById('input').value;
    if (!input || input == '') {
      return false;
    }
    addText(document.getElementById('main'));
  }


});
//hide and show the ul
$(document).ready(function() {
  $('#main').hide();
  $('#btn').click(function() {
    $('#main').toggle('slow');
  });
});

