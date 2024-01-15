document.addEventListener("DOMContentLoaded", () => {

    nav = document.querySelector(".mobile-navbar");
    navButton = document.getElementById("mobile-showOrHide");
    navBar = document.querySelector(".mobile-navContents");
    navList = document.querySelector(".mobile-navContents ul");
    icon = document.querySelector("#mobile-showOrHide img");

    navButton.addEventListener("click", () => {
        if (navBar.style.width == "0%"){
            showMenu();
        } else {
            hideMenu();
        }
    })
    
    navBar.addEventListener("mouseout", hideMenu);
})

function showMenu(){
    icon.src = "images/icons/hide.png"
    nav.style.width = "200px"
    navBar.style.width = "90%";
    navList.style.display = "block";
}

function hideMenu(){
    icon.src = "images/icons/show.png"
    nav.style.width = "25px"
    navBar.style.width = "0%";
    navList.style.display = "none";
}