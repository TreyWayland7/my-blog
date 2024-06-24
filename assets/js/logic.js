const buttonThemeEl = document.querySelector('#buttonTheme');
const navBarContainerEl = document.querySelector('#navBarContainer');
const navBarTextEl = document.querySelector('#navbar');
const footerContainerEl = document.querySelector('#footerContainer');
// const footerContainerEl2 = document.querySelector('#footerContainer2');
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
    // footerContainerEl2.classList.add("footerDarkMode");
    

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

function changeTheme2(event){
    event.stopPropagation();
    // bodyEl.classList.add("bodyLightMode");
    // console.log("sd");


}


// buttonThemeEl.addEventListener('click', changeTheme);
// bodyEl.addEventListener('click', changeTheme2);


