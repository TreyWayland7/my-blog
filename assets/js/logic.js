const buttonThemeEl = document.querySelector('#buttonTheme');
const navBarContainerEl = document.querySelector('#navBarContainer');
const navBarTextEl = document.querySelector('#navbar');
const footerContainerEl = document.querySelector('#footerContainer');
const blogFormIDEl = document.querySelectorAll('#blogFormID');
const displayContentIDEl = document.querySelectorAll('#displayContentID');
const bodyEl = document.querySelector('body');

function togleLightMode(){
    bodyEl.classList.remove("bodyDarkMode");
    navBarContainerEl.classList.remove("navBarDarMode");
    navBarTextEl.classList.remove("navBarTextDarkMode");
    footerContainerEl.classList.remove("footerDarkMode");

    for(let i=0;i<blogFormIDEl.length; i++){
        blogFormIDEl[i].classList.remove("blogFormDisplayDarkMode");
    }
    for(let i=0;i<blogFormIDEl.length; i++){
        displayContentIDEl[i].classList.remove("displayContentDarkMode");
    }
}

function togleDarkMode(){
    bodyEl.classList.add("bodyDarkMode");
    navBarContainerEl.classList.add("navBarDarMode");
    navBarTextEl.classList.add("navBarTextDarkMode");
    footerContainerEl.classList.add("footerDarkMode");
    for(let i=0;i<blogFormIDEl.length; i++){
        blogFormIDEl[i].classList.add("blogFormDisplayDarkMode");
    }
    for(let i=0;i<displayContentIDEl.length; i++){
        displayContentIDEl[i].classList.add("displayContentDarkMode");
    }
}

function changeTheme(event){
    event.stopPropagation();
    if (bodyEl.classList.contains("bodyDarkMode")){
        togleLightMode();
    }else{
        togleDarkMode();
    }
}

buttonThemeEl.addEventListener('click', changeTheme);
