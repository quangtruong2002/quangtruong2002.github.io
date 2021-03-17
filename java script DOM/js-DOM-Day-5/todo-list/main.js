

// Mockup mảng công việc (todos)
// Mỗi công việc bao gồm 3 thuộc tính : id, title, status => id random

function randomId() {
    return Math.floor(Math.random() * 100000)
}
let todos = [
    // {
    //     id : randomId(),
    //     title : "đi chơi",
    //     status : false,
    // }, 
    // {
    //     id : randomId(),
    //     title : "làm bài tập",
    //     status : true,
    // },
    // {
    //     id : randomId(),
    //     title : "đá bóng",
    //     status : false,
    // },
];

const todo_List = document.querySelector('.todo-list')

const btn_add = document.getElementById('btn-add')
const todo_input = document.getElementById('todo-input');

const options = document.querySelectorAll('.todo-option-item input')


let isUpdate = false;
let idUpdate = null;
let title

//
btn_add.addEventListener('click', function() {
    let todoTitle = todo_input.value;
    if(todoTitle == "") {
        alert("Nội dung không được để trống!")
        return
    }
    
    
    if(isUpdate == true) {
        //update công việc
        for(let i = 0; i < todos.length; i++) {
            if( todos[i].id == idUpdate) {
                todos[i].title = todoTitle
            }
        }
        btn_add.innerText = "Thêm"
        isUpdate = false
        idUpdate = null
    }
    else {
        //thêm công việc 
    }
    let newTodo = {
        id : randomId(),
        title : todoTitle,
        status : false
    }
    todos.push(newTodo)

    todo_input.value = '';
    renderUI(todos)
})

// sử dụng nút enter cho buttom
todo_input.addEventListener('keyup', function (e) {
    
    if(e.keyCode == 13) {
        btn_add.click()
    }
    
});

// Từ todos => render ra ngoài giao diện
function renderUI(arr) {
    todo_List.innerHTML = '';

    if(arr.length == 0) {
        todo_List.innerHTML = `<p class='todos-empty'>không có công việc nào trong danh sách!</p>`;
    }
    for (let i = 0; i < arr.length; i++ ) {

        let t = arr[i];

        todo_List.innerHTML += `    
        <div class="todo-item ${t.status ? 'active-todo' : ''}">
        <div class="todo-item-title">
            <input type="checkbox" ${t.status ? 'checked' : ''} onclick=toggleStatus(${t.id})>
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update" onclick=updateTodo(${t.id})>
                <img src="./img/pencil.svg" alt="icon">
            </button>
            <button class="btn btn-delete" onclick=deleteTodo(${t.id})>
                <img src="./img/remove.svg" alt="icon">
            </button>
        </div>
    </div>`
    }
    
}

function updateTodo(id) {
    for(let i = 0; i < todos.length; i++) {
        
        if(todos[i].id == id) {
            title = todos[i].title
        }
    }
    btn_add.innerText = "CẬP NHẬT";

    todo_input.value = title;
    todo_input.focus();
    
    idUpdate = id;
    isUpdate = true;

}

function deleteTodo(id) {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id == id) {
            todos.splice(i,1);
        }
    }
    
}

function toggleStatus(id) {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id == id) {
            todos[i].status = !todos[i].status; // cách viết ngắn gọn, trong trường hợp status là true thì đổi thành false và ngược lại
        }
    }
    
    renderUI(todos)
}






window.onload = renderUI(todos)

