// to do list
//<li><input type="checkbox"><span>something something</span></li>

function addToList(list, itemText){
  var listItem = document.createElement('li');
  listItem.innerText = itemText ;

  list.appendChild(listItem);
}


var inItemText = document.getElementById('inItemText');
inItemText.focus();
inItemText.onkeyup = function() {

  if((event.which)== 13) {
    var itemText = inItemText.value;

    if (!itemText || itemText == '') {
      return false;
    }
    addToList(document.getElementById('list'),itemText);
  }
};


