const hamburgerMenu = document.getElementById("hamburgerMenu");
const nav__list  =   document.querySelector(".nav__list");
const bio = document.querySelector(".bio")
const nav = document.querySelector(".nav")

hamburgerMenu.addEventListener("click", ()=>{
    nav__list.classList.toggle("show");
});

const updatePadding =()=>{
    bio.style.paddingTop= `${nav.offsetHeight}px`;
}

updatePadding();

window.addEventListener("resize",updatePadding);


window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        nav.classList.add("shrink")
    }else{
        nav.classList.remove("shrink")
    }
})