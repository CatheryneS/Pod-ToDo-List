const list1 = document.getElementById('list');

const todo = ['learn', 'laundry', 'shopping'];

// add array to the screen
function addToDo(todo){
  
    for (let i = 0; i < todo.length; i++) {
       renderItem(todo[i])
    }
}

addToDo(todo)

// add a form - DONE
// connect form with addEventListener
const form = document.getElementById('submit-form')
// let text = document.getElementById('todo-item')

form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault()
    let text = e.target.children[0].value
    renderItem(text)
    // console.log('clicked')
    e.target.reset()
    // console.log(text.value)
    // todo.push(text.value)
    // console.log(todo)
};

function fetchLists() {
    fetch("http://localhost:3000/lists")
    .then(resp => resp.json())
    .then(json => renderItem(json[0].name))
}



function renderItem(item){
    let li = document.createElement('li'); 
    let button = document.createElement('button');
    let pTag = document.createElement('p')
    let counter = 0;
        pTag.innerText = `${counter} Likes`
        button.innerHTML = "like";
        button.addEventListener('click', addLike);
        list1.appendChild(pTag);
        list1.appendChild(button);
        li.innerHTML = item;
        list1.appendChild(li);

        // console.log(li)
};

function addLike(e){
    let like = e.target.previousElementSibling;
    let count = parseInt(like.innerText);
    count++ ;

    like.innerText = `${count} Likes`;
}

fetchLists()