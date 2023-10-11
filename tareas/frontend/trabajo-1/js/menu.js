const exitMenu = document.getElementById("exit-menu");
const barsMenu = document.getElementById("bars-menu");
const menu = document.getElementById("container-menu");

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 970){
        menu.style.position = "relative";
        menu.style.transform = "translateX(0)";
        menu.style.display = "block";
        barsMenu.style.display = "none";
    } else {
        menu.style.position = "fixed";
        menu.style.transform = "translateX(-100%)";
        menu.style.display = "none";
        barsMenu.style.display = "block";
    }
});

barsMenu.addEventListener("click", ()=>{
    menu.style.display = "block";
    menu.style.transition = "all .3s linear";
    setTimeout(()=>{
        menu.style.transform = "translateX(0)";
    }, 100)
});

exitMenu.addEventListener("click", ()=>{
    menu.style.transform = "translateX(-100%)";
    setTimeout(()=>{
        menu.style.display = "none";
    }, 300);
});