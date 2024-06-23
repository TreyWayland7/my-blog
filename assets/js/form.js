const formEl = document.querySelector('#submitForm');
const authorEl = document.querySelector('#formAuthor');
const titleEl = document.querySelector('#formTitle');
const contentEl = document.querySelector('#formContent');


let blogPosts = [];
//  localStorage.getItem('blogPosts');



// if (storedBlogPosts != ""){
    // blogPosts.push(storedBlogPosts);
// }

// console.log(localStorage);
// console.log(typeof(storedBlogPosts));
// blogPosts.push(storedBlogPosts);



let storedBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));
// console.log(storedBlogPosts[0].author);

if (storedBlogPosts != null){
    for (let i=0; i<storedBlogPosts.length; i++){
        // console.log("1");
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

    // console.log(blogPost.author);
    // blogPosts.push(JSON.stringify(blogPost))
    blogPosts.push(blogPost);

 

    
    // console.log(blogPosts);


    // if (storedBlogPosts != null){
    //     blogPosts.push(storedBlogPosts)
    // }

    localStorage.setItem('blogPosts',JSON.stringify(blogPosts));
    // localStorage.setItem('blogPosts', JSON.stringify(blogPost + storedBlogPosts));
    // let storedBlogPosts = localStorage.getItem('blogPosts');
    // console.log(storedBlogPosts);
    // console.log(authorEl.value);
    // console.log(titleEl.value);
    // console.log(contentEl.value);


    // window.location.replace("blog.html");
    location.href = "blog.html";
}

formEl.addEventListener('submit', addNewForm);