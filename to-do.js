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

function addText(main){
    var input = document.getElementById('input').value;
    //document.getElementById('do').innerHTML = input;
    var node = document.createElement("P");
    var createCheckbox = document.createElement('input');
    createCheckbox.type = 'checkbox';

    node.appendChild(createCheckbox);
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    var toDo = document.getElementById('do');
    toDo.appendChild(node);


}

//var Btn = document.getElementById('btn');
input.addEventListener('keyup', function(e) {
//   var textnode = document.createTextNode(input);
// //   console.log(2);
   if(event.which == 13) {
     console.log(1);
    var input = document.getElementById('input').value;


    if (!input || input == '') {
      return false;
    }
     addText(document.getElementById('main'));
  }
// //   inItemText.focus();
// //   inItemText.select();
});


