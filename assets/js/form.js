const formEl = document.querySelector('#submitForm');
const authorEl = document.querySelector('#formAuthor');
const titleEl = document.querySelector('#formTitle');
const contentEl = document.querySelector('#formContent');


let blogPosts = [];
//  localStorage.getItem('blogPosts');

// let storedBlogPosts = localStorage.getItem('blogPosts');


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

    // console.log(blogPost.author);
    // console.log(blogPosts);
    blogPosts.push(JSON.stringify(blogPost))
    
    localStorage.setItem('blogPosts', blogPosts);


    // console.log(authorEl.value);
    // console.log(titleEl.value);
    // console.log(contentEl.value);
    window.location.replace("blog.html");
}

formEl.addEventListener('submit', addNewForm);