//NAVIGATION BAR EFFECTS ON SCROLL
window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
}

//PROJECTS SECTION MODAL
const projectModals = document.querySelectorAll(".project-model");
const imgCards = document.querySelectorAll(".img-card");
const projectcloseBtns = document.querySelectorAll(".project-close-btn");

var projectModal = function(modalclick){
    projectModals[modalclick].classList.add("active");
}

imgCards.forEach((imgCard, index) => {
    imgCard.addEventListener("click", () => {
        projectModal(index);
    });
});

projectcloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (event) => {
        event.stopPropagation(); 
        projectModals.forEach((projectModalView) => {
            projectModalView.classList.remove("active");
        });
    });
});