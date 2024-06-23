console.log("blog");
const authorEl = document.querySelector('#blogPlaceHolder');


let storedBlogPosts = localStorage.getItem('blogPosts');

console.log(storedBlogPosts);

const blogForgDisplayEl = document.createElement('div');
blogForgDisplayEl.classList.add('blogFormDisplay');
const disoplayTitleEl = document.createElement('div');
disoplayTitleEl.classList.add('displayTitle');
// disoplayTitleEl.textContent = storedBlogPosts.author;
disoplayTitleEl.textContent = "Title";
blogForgDisplayEl.appendChild(disoplayTitleEl);
// li4.textContent = "asd";
authorEl.appendChild(blogForgDisplayEl);

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

