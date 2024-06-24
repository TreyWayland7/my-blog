console.log("blog");
const authorEl = document.querySelector('#blogPlaceHolder');
const backButtonEl = document.querySelector('#backButton');


let storedBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));


// let storedBlogPosts =  localStorage.getItem('blogPosts');
console.log(storedBlogPosts);

for(let i=0; i<storedBlogPosts.length;i++){
    // console.log(storedBlogPosts[i].title);
    // console.log(storedBlogPosts[i].content);
    // console.log(storedBlogPosts[i].author);
    const blogForgDisplayEl = document.createElement('div');
    blogForgDisplayEl.setAttribute("id", "blogFormID");
    blogForgDisplayEl.classList.add('blogFormDisplay');

    // title
    const disoplayTitleEl = document.createElement('div');
    disoplayTitleEl.classList.add('displayTitle');
    disoplayTitleEl.textContent = storedBlogPosts[i].title;
    // disoplayTitleEl.textContent = "Title";
    blogForgDisplayEl.appendChild(disoplayTitleEl);
    // content
    const displayContent = document.createElement('div');
    displayContent.setAttribute("id", "displayContentID");
    displayContent.classList.add('displayContent');
    displayContent.textContent = storedBlogPosts[i].content;
    // displayContent.textContent = "assd";
    blogForgDisplayEl.appendChild(displayContent);
    // author
    const displayAuthor = document.createElement('div');
    displayAuthor.classList.add('displayAuthor');
    displayAuthor.textContent = "Author: " + storedBlogPosts[i].author;
    // displayAuthor.textContent = "Author";
    blogForgDisplayEl.appendChild(displayAuthor);
    // li4.textContent = "asd";
    authorEl.appendChild(blogForgDisplayEl);
    }





backButtonEl.addEventListener('click',backButtonRedirect );

function backButtonRedirect(event){
    location.href = "index.html";
}

// console.log(JSON.parse(storedBlogPosts));

// console.log(typeof(storedBlogPosts))

// for (thing in JSON.parse(storedBlogPosts)){
    // parsed = JSON.parse(thing);
    // const li4 = document.createElement('li');
    // console.log(thing);

    // li4.textContent = parsed.author;
    // console.log(JSON.parse(storedBlogPosts).author);

    // authorEl.appendChild(li4);

// }

