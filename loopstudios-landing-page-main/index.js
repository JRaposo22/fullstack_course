/*******************HAMBURGER BUTTON MENU*********************************/

const hamburgerBtn = document.querySelector(".hamburger--btn");
const navMenu = document.querySelector(".nav--flex");
const topSection = document.querySelector(".top--section");
const heroHeader = document.querySelector(".hero--header")

console.log(hamburgerBtn);

hamburgerBtn.addEventListener("click", function(){

    

    if (navMenu.style.maxHeight == "0px" || navMenu.style.maxHeight == 0){
        navMenu.style.maxHeight = navMenu.scrollHeight + "px";
        hamburgerBtn.src = "images/icon-close.svg"
        topSection.style.background = "rgb(0, 0, 0)";
        heroHeader.style.display = "none";
        

    }else{
        navMenu.style.maxHeight = 0;
        hamburgerBtn.src="images/icon-hamburger.svg"
        topSection.style.background = "url(images/desktop/image-hero.jpg) no-repeat";
        heroHeader.style.display = "block";
    }

})