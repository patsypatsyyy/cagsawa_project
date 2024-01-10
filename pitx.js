let sched1 = {
    route: "PITX - Naga City",
    departure: "9:00 AM, 5:30 PM, 7:00 PM, 7:30 PM, 8:00 PM, 8:30 PM",
    schedule: "Daily"
}
let sched2 = {
    route: "PITX - Legazpi City",
    departure: "9:00 AM, 5:30 PM, 7:00 PM, 7:30 PM, 8:00 PM, 8:30 PM",
    schedule: "Daily"
}
let sched3 = {
    route: "PITX - Albay",
    departure: "5:30 PM, 7:00 PM, 7:30 PM, 8:00 PM, 8:30 PM",
    schedule: "Daily"
}

// ------------------------------------------------------------ //

let busFare1 = {
    origin: "PITX",
    destination: "Naga",
    class: "AC",
    price: "₱760+"
}
let busFare2 = {
    origin: "PITX",
    destination: "Legazpi",
    class: "AC",
    price: "₱760+"
}
let busFare3 = {
    origin: "PITX",
    destination: "Albay",
    class: "AC",
    price: "₱895+"
}

// ------------------------------------------------------------ //

let scrollContainer = document.querySelector(".pitx-gallery");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

// ------------------------------------------------------------ //

const routes = [sched1, sched2, sched3];

for(i = 0; i < routes.length; i++){
    let newTableRow = document.createElement("tr");
    let newTableRowRoute = document.createElement("td");
    let newTableRowDep = document.createElement("td");
    let newTableRowSched = document.createElement("td");
    
    if(i % 2 == 0){
        newTableRowRoute.style.backgroundColor = "#F1FFF0";
        newTableRowDep.style.backgroundColor = "#F1FFF0";
        newTableRowSched.style.backgroundColor = "#F1FFF0";
    }
    
    newTableRowRoute.textContent = routes[i].route;
    newTableRowDep.textContent = routes[i].departure;
    newTableRowSched.textContent = routes[i].schedule;
    
    document.getElementById("busRoutes").append(newTableRow, newTableRowRoute, newTableRowDep, newTableRowSched);
}

// ------------------------------------------------------------ //

const fares = [busFare1, busFare2, busFare3];

for(i = 0; i < fares.length; i++){
    let newTableRow = document.createElement("tr");
    let newTableRowOrigin = document.createElement("td");
    let newTableRowDes = document.createElement("td");
    let newTableRowClass = document.createElement("td");
    let newTableRowPrice = document.createElement("td");
    
    if(i % 2 == 0){
        newTableRowOrigin.style.backgroundColor = "#F1FFF0";
        newTableRowDes.style.backgroundColor = "#F1FFF0";
        newTableRowClass.style.backgroundColor = "#F1FFF0";
        newTableRowPrice.style.backgroundColor = "#F1FFF0";
    }
    
    newTableRowOrigin.textContent = fares[i].origin;
    newTableRowDes.textContent = fares[i].destination;
    newTableRowClass.textContent = fares[i].class;
    newTableRowPrice.textContent = fares[i].price;
    
    document.getElementById("busFares").append(newTableRow, newTableRowOrigin, newTableRowDes, newTableRowClass, newTableRowPrice);
}