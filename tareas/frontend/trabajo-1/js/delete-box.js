function closeDeleteBox(box){
    box.style.opacity = "0"
    setTimeout(()=>{
        box.style.display = "none";
    },300)
}

function openDeleteBox(box){
    box.style.display = "flex";
    box.style.transition = "all .3s linear";
    setTimeout(()=>{
        box.style.opacity = "1"
    }, 100)
}

const deleteBox = document.getElementById("container-delete-box");
let btnDelete = document.querySelectorAll(".delete-subject");

btnDelete.forEach((btn)=> btn.addEventListener("click", () => openDeleteBox(deleteBox)));
document.getElementById("exit-delete").addEventListener("click", ()=> closeDeleteBox(deleteBox) );
document.getElementById("cancel-delete").addEventListener("click", ()=> closeDeleteBox(deleteBox) );