var bt = document.getElementById('enter');
var inp = document.getElementById('user_input');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li');

function create_list(){
    var li = document.createElement('li');
    var bt = document.createElement('button');
    li.appendChild(document.createTextNode(inp.value));
    ul.appendChild(li);
    li.append(bt);
    bt.innerHTML = "Delete";
    inp.value = "";
    buttonListElement();
}

function add_list_click(){
    if (inp.value){
        create_list();
                    }
}

function add_list_enter(event){
    if (inp.value && event.keyCode === 13){
    create_list();
                }
}

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function buttonListElement(){
	var button = document.querySelectorAll('li button');
	for( i=0; i<button.length; i++){
	button[i].addEventListener('click', clearElement)
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove()
	}
}


bt.addEventListener('click',add_list_click);

inp.addEventListener('keypress',add_list_enter);

ul.addEventListener("click", strikeThrough);

buttonListElement();



