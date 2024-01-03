document.addEventListener("DOMContentLoaded", function(){
    // Gallery Container
    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
    
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    
    })
    
    nextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 300;
    })
    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 300;
    })
    
    // Bus Class Navigation
    let busClassNavHeader = document.getElementById("busCoaches");
    let busClassNavBtn = busClassNavHeader.getElementsByClassName("busClassNav");
    
    let busClassContentHeader = document.getElementById("busClassContent");
    let busClassContent = busClassContentHeader.getElementsByClassName("busClassSection");
    
    
    for (let i = 0; i < busClassNavBtn.length; i++) {
        let current = busClassContent[i]
        busClassNavBtn[i].addEventListener("click", function() {
            let currentNav = document.getElementsByClassName("busClassNavActive");
            let currentBusInfo = document.getElementsByClassName("showContent")
            currentBusInfo[0].className = currentBusInfo[0].className.replace(" showContent", "");
            currentNav[0].className = currentNav[0].className.replace(" busClassNavActive", "");
    
            this.className += " busClassNavActive";
            current.className += " showContent";
        });
    }
})

