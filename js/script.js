const hamburgerMenu = document.getElementById("hamburgerMenu");
const nav__list  =   document.querySelector(".nav__list");
const bio = document.querySelector(".bio")
const nav = document.querySelector(".nav")
const header = document.querySelector(".header")

hamburgerMenu.addEventListener("click", ()=>{
    nav__list.classList.contains("show")? nav__list.classList.remove("show") : nav__list.classList.add("show");
});

window.addEventListener("resize",()=>{
        
        nav__list.classList.remove("show")
})
 
const updatePadding =()=>{
    bio.style.paddingTop= `${header.offsetHeight}px`;
}

updatePadding();

window.addEventListener("resize",updatePadding);


window.addEventListener("scroll",()=>{
    nav__list.classList.remove("show");
    if(window.scrollY>50){
        header.classList.add("shrink")
        header.style.top="-5px";
    }else{
        header.classList.remove("shrink")
        header.style.top="0px"
    }
})