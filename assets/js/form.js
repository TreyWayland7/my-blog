const formEl = document.querySelector('#submitForm');
const authorEl = document.querySelector('#formAuthor');
const titleEl = document.querySelector('#formTitle');
const contentEl = document.querySelector('#formContent');

let blogPosts = [];

let storedBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));

if (storedBlogPosts != null){
    for (let i=0; i<storedBlogPosts.length; i++){
        console.log(storedBlogPosts[i]);
        blogPosts.push(storedBlogPosts[i]);
    }
}

function addNewForm(event){
    event.preventDefault();
    
    if ((authorEl.value == "") || (titleEl.value == "") || (contentEl.value == "")){
        alert("User Error: Please Complete the Form");
        return;
    }

    const blogPost = {
        author : authorEl.value,
        title : titleEl.value,
        content : contentEl.value
    };
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts',JSON.stringify(blogPosts));
    location.href = "blog.html";
}

formEl.addEventListener('submit', addNewForm);