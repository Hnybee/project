window.addEventListener("scroll",()=>{
    var some = document.querySelector(".btn")
    if(window.scrollY > 100){
        btn.style.display = "flex"
    }else{
        btn.style.display = "none"
    }
})