const input = document.getElementById('input-box');
const todoList = document.getElementById('todoList');

const addTask = () => {
    if (input.value === ''){
        alert('Add a task!')
    }else{
        let li = document.createElement('li')
        li.innerHTML = input.value;
        todoList.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00D7";
        li.appendChild(span)
    }
    input.value = ''
    save();
}


todoList.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        save();
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save();
    }
})

const save = () => {
    localStorage.setItem('dataA', todoList.innerHTML)
}

const showTask = () => {
    todoList.innerHTML = localStorage.getItem('dataA')
}
showTask()