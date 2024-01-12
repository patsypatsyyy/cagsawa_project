let nagaSchedule = {
    cityName: "Naga City",
    travelSchedule: "9:00 AM, 5:30 PM, 7:00 PM, 7:30 PM, 8:00 PM, 8:30 PM"
}
let baaoSchedule = {
    cityName: "Baao",
    travelSchedule: "9:00 AM, 5:30 PM, 7:00 PM, 7:30 PM, 8:00 PM"
}
let nabuaSchedule = {
    cityName: "Nabua",
    travelSchedule: "9:00 AM, 5:30 PM, 7:00 PM, 7:30 PM, 8:00 PM"
}
let batoSchedule = {
    cityName: "Bato",
    travelSchedule: "9:00 AM, 5:30 PM, 7:00 PM, 7:30 PM, 8:00 PM, 8:30 PM"
}
let oasSchedule = {
    cityName: "Oas",
    travelSchedule: "9:00 AM, 5:30 PM, 7:00 PM, 7:30 PM"
}
let polanguiSchedule = {
    cityName: "Polangui",
    travelSchedule: "9:00 AM, 5:30 PM, 7:00 PM, 7:30 PM"
}
let ligaoSchedule = {
    cityName: "Ligao",
    travelSchedule: "9:00AM, 5:30PM, 7:00PM, 7:30PM"
}
let camaligSchedule = {
    cityName: "Camalig",
    travelSchedule: "9:00AM, 5:30PM, 7:00PM, 7:30PM"
}
let guinobatanSchedule = {
    cityName: "Guinobatan",
    travelSchedule: "9:00AM, 5:30PM, 7:00PM, 7:30PM"
}
let bacacaySchedule = {
    cityName: "Bacacay",
    travelSchedule: "9:00AM, 5:30PM, 7:00PM, 7:30PM, 8:00PM, 8:30PM"
}
let malilipotSchedule = {
    cityName: "Malilipot",
    travelSchedule: "9:00AM, 5:30PM, 7:00PM, 7:30PM, 8:00PM, 8:30PM"
}
let daragaSchedule = {
    cityName: "Daraga",
    travelSchedule: "9:00AM, 5:30PM, 7:00PM, 7:30PM"
}
let legazpiSchedule = {
    cityName: "Legazpi",
    travelSchedule: "9:00AM, 5:30PM, 7:00PM, 7:30PM, 8:00PM, 8:30PM"
}

const schedules = [nagaSchedule, baaoSchedule, nabuaSchedule, batoSchedule, oasSchedule, polanguiSchedule, ligaoSchedule, camaligSchedule, guinobatanSchedule, bacacaySchedule, malilipotSchedule, daragaSchedule, legazpiSchedule];

for(i = 0; i < schedules.length; i++){
    let newTableRow = document.createElement("tr");
    let newTableRowName = document.createElement("td");
    let newTableRowSched = document.createElement("td");
    
    if(i % 2 == 0){
        newTableRowName.style.backgroundColor = "#F1FFF0";
        newTableRowSched.style.backgroundColor = "#F1FFF0";
    }

    newTableRowName.textContent = schedules[i].cityName;
    newTableRowSched.textContent = schedules[i].travelSchedule;

    document.getElementById("bus-schedules").append(newTableRow, newTableRowName, newTableRowSched);

}