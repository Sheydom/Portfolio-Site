const hamburgerMenu = document.getElementById("hamburgerMenu");
const nav__list  =   document.querySelector(".nav__list");
const bio = document.querySelector(".bio")
const nav = document.querySelector(".nav")

hamburgerMenu.addEventListener("click", ()=>{
    nav__list.classList.contains("show")? nav__list.classList.remove("show") : nav__list.classList.add("show");
});

window.addEventListener("resize",()=>{
        
        nav__list.classList.remove("show")
})
 
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