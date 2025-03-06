
const bio = document.querySelector(".bio")
const nav = document.querySelector(".nav")
const header = document.querySelector(".header")

window.addEventListener("DOMContentLoaded",()=>{
    fetch("header.html")
    .then(response=> response.text())
    .then(data=>{
        // very important to have t he setTimeout here because of the asyncrhonus fetch browser tries to run addeventlistener on hamburger menu without being loaded in the DOM.
        setTimeout(()=>{
            document.getElementById("nav").innerHTML=data
            const hamburgerMenu = document.getElementById("hamburgerMenu");
            const nav__list  =   document.querySelector(".nav__list");
            hamburgerMenu.addEventListener("click", ()=>{
                nav__list.classList.contains("show")? nav__list.classList.remove("show") : nav__list.classList.add("show");
        },0)

});
    })
})



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


window.addEventListener("scroll",()=>window.scrollY-200)