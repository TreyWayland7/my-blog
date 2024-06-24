console.log("blog");
const authorEl = document.querySelector('#blogPlaceHolder');
const backButtonEl = document.querySelector('#backButton');
let storedBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));
console.log(storedBlogPosts);

for(let i=0; i<storedBlogPosts.length;i++){
    const blogForgDisplayEl = document.createElement('div');
    blogForgDisplayEl.setAttribute("id", "blogFormID");
    blogForgDisplayEl.classList.add('blogFormDisplay');
    // title
    const disoplayTitleEl = document.createElement('div');
    disoplayTitleEl.classList.add('displayTitle');
    disoplayTitleEl.textContent = storedBlogPosts[i].title;
    blogForgDisplayEl.appendChild(disoplayTitleEl);
    // content
    const displayContent = document.createElement('div');
    displayContent.setAttribute("id", "displayContentID");
    displayContent.classList.add('displayContent');
    displayContent.textContent = storedBlogPosts[i].content;
    blogForgDisplayEl.appendChild(displayContent);
    // author
    const displayAuthor = document.createElement('div');
    displayAuthor.classList.add('displayAuthor');
    displayAuthor.textContent = "Author: " + storedBlogPosts[i].author;
    blogForgDisplayEl.appendChild(displayAuthor);
    authorEl.appendChild(blogForgDisplayEl);
    }
backButtonEl.addEventListener('click',backButtonRedirect );

function backButtonRedirect(event){
    location.href = "index.html";
}
