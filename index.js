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

let showHome = document.getElementById("showHome");
let showSched = document.getElementById("showSched");
let showTerminals = document.getElementById("showTerminals");
let showPITX = document.getElementById("showPITX");
let showBusRental = document.getElementById("showBusRental");
let showFAQ = document.getElementById("showFAQ");   


