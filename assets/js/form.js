const formEl = document.querySelector('#submitForm');
const authorEl = document.querySelector('#formAuthor');
const titleEl = document.querySelector('#formTitle');
const contentEl = document.querySelector('#formContent');

function addNewForm(event){
    event.preventDefault();
    console.log(authorEl.value);
    console.log(titleEl.value);
    console.log(contentEl.value);
    // window.location.replace("blog.html");
}

formEl.addEventListener('submit', addNewForm);