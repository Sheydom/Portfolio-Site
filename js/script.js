const main = document.querySelector(".main");
const bio = document.querySelector(".bio");
const articles = document.querySelectorAll(".art");
const footer = document.querySelector(".footer");
const mainone = document.querySelector(".mainone");


window.addEventListener("DOMContentLoaded",()=>{
    fetch("components/header.html")
    .then(response=> response.text())
    .then(data=>{
        
        
            document.getElementById("nav").innerHTML=data;
            const hamburgerMenu = document.getElementById("hamburgerMenu");
            const nav__list  =   document.querySelector(".nav__list");
            hamburgerMenu.addEventListener("click", ()=>{
                nav__list.classList.contains("show")? nav__list.classList.remove("show") : nav__list.classList.add("show");
        })

            updatePadding();
            window.addEventListener("resize",()=>{
        
                nav__list.classList.remove("show")
        })
    })
    
    fetch("components/footer.html")
    .then(response=>response.text())
    .then(data=>{
        document.getElementById("footer").innerHTML=data;
    })
    
})




 
// function to have the content always below the navbar as the navbar is fixed and out of the DOM flow so use js to calculate the propper padding-top accordlingy to the height of the header navbar 

const updatePadding =()=>{
   
    const header = document.querySelector(".header");
    // ensure header exists
    if(header){
      const  headerHeight=`${header.offsetHeight}px`
// apply padding to bio top if it exists
      if(bio){
        bio.style.paddingTop=headerHeight;
      }
    //   apply padding to main top if it exists
      if(main){
        main.style.paddingTop=headerHeight;
      }

    } 
}


    


window.addEventListener("resize",updatePadding);


window.addEventListener("scroll",()=>{
   
    if(nav__list.classList.remove("show")){
        if(window.scrollY>50){
        header.classList.add("shrink")
        header.style.top="-5px";
    }else{
        header.classList.remove("shrink")
        header.style.top="0px"
    }}
    
})


window.addEventListener("scroll",()=>window.scrollY-200)



articles.forEach((art)=>{
    art.addEventListener("mouseenter",()=>{
        articles.forEach((a)=>{
            if(a!==art){
                 //a.style.transform="scale(0.8)";
                 //a.style.opacity="0.8";
                 //a.style.filter="blur(3px)";
            }
        })
        art.style.transform="scale(1.1)";
        // footer.style.transform="translateY(20px)";
        //  mainone.style.paddingBottom="50px";
        
    })
    art.addEventListener("mouseleave",()=>{
        articles.forEach((a)=>{
            a.style.transform="scale(1)";
            a.style.opacity="1";
            a.style.filter="blur(0px)";
            
        })
        // footer.style.transform="translateY(0px)";
        // mainone.style.transform="translateY(0px)";
    })
})

