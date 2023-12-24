let container = document.querySelector('.container'),
    formTodo = document.querySelector('#todo-form'),
    input = document.querySelector('#txtinput'),
    button = document.querySelector('#btn-todo');


let ul = document.createElement('ul');
ul.classList.add('todo_list');
container.appendChild(ul);

button.addEventListener('click', function (e) {
    e.preventDefault();
})

function addClick() {
    if (input.value === '') {
        input.classList.add('error');
        alert("Enter a value");
    }
    else {
        createElem();
        input.classList.remove('error');
    }
    input.value = '';
    save();
}

function createElem() {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = input.value;
    let img = document.createElement('img');
    img.src = "./icons/xmark-solid.svg";
    li.appendChild(img);
    li.appendChild(span);
    ul.appendChild(li);
}

ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        save();
    } else if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        save();
    }
}, false)

function save() {
    localStorage.setItem('data', ul.innerHTML);
}
function saveGet() {
    ul.innerHTML = localStorage.getItem('data');
}
saveGet();

