let tabacoTerminal = {
    locationName: "CAGSAWA Bus Terminal Tabaco",
    address: "Main Office 2F Rosita Ang Bldg. A.A. Berces St., Ziga Avenue, Tabaco City",
    contactNum: "+63(052)487-5318, +63(052)830-1338, +63(052)998-9050, +63(02)429-1530",
    imageSource: "images/terminal_page/terminal_tabaco.png"
}

let quezonTerminal = {
    locationName: "CAGSAWA Bus Terminal Quezon",
    address: "General Romulo Avenue, Araneta Center, Quezon City",
    contactNum: "0917-346-1133",
    imageSource: "images/terminal_page/terminal_quezon.png"

}

let cubaoTerminal = {
    locationName: "CAGSAWA Bus Terminal Cubao",
    address: "Araneta Center Bus Station, Times Square Ave, Cubao, Quezon City, 1109 Metro Manila",
    contactNum: "+63(02)8913-1514",
    imageSource: "images/terminal_page/terminal_cubao.png"

}

let ermitaTerminal = {
    locationName: "CAGSAWA Bus Terminal Ermita",
    address: "472 Padre Faura St, Ermita, Manila, 1000 Metro Manila",
    contactNum: "+63(02)525-9756, 0906-448-0110, 0925-617-2005",
    imageSource: "images/terminal_page/terminal_ermita.png"
}

let legazpiTerminal = {
    locationName: "CAGSAWA Bus Terminal Legazpi",
    address: "Legazpi Bus Terminal Bitano Tahao Rd., Legazpi City",
    contactNum: "0932-880-9633",
    imageSource: "images/terminal_page/terminal_legazpi.png"
}

const terminals = [tabacoTerminal, legazpiTerminal, quezonTerminal, cubaoTerminal, ermitaTerminal];

for(i = 0; i < terminals.length; i++){
    let locationDiv = document.createElement("div");
    let locationTitle = document.createElement("h2");
    let locationImage = document.createElement("img");
    let locationAddress = document.createElement("p");
    let locationContactNumbers = document.createElement("p");

    if(i == 0){
        locationDiv.className = "terminalBlock showTerminalBlock";
    } else {
        locationDiv.className = "terminalBlock";
    } 

    locationTitle.className = "h2-text-style";
    locationContactNumbers.className = "p-text-style";
    locationAddress.className = "p-text-style";
    locationImage.className = "terminalMap"

    locationTitle.textContent = terminals[i].locationName;
    locationImage.src = terminals[i].imageSource;
    locationContactNumbers.innerHTML = `<strong>Contact Number(s):</strong> ${terminals[i].contactNum}`;
    locationAddress.innerHTML = `<strong>Address:</strong> ${terminals[i].address}`;
    locationAddress.style.marginTop = "3%";

    document.querySelector(".location-container").append(locationDiv);
    document.getElementsByClassName("terminalBlock")[i].append(
        locationTitle, 
        locationImage, 
        locationAddress, 
        locationContactNumbers);

}

document.addEventListener("DOMContentLoaded", function(event) {
    let terminalNavHeader = document.getElementById("terminalNavBar");
    let terminalNavBtn = terminalNavHeader.getElementsByClassName("terminalNav");
  
    let terminalContentHeader = document.getElementById("location-container");
    let terminalContent = terminalContentHeader.getElementsByClassName("terminalBlock");
  
    for (let i = 0; i < terminalNavBtn.length; i++) {
        let current = terminalContent[i];
        terminalNavBtn[i].addEventListener("click", function() {
            let currentNav = document.getElementsByClassName("terminalNavActive");
            let currentTerminalInfo = document.getElementsByClassName("showTerminalBlock");
  
            currentTerminalInfo[0].className = currentTerminalInfo[0].className.replace("showTerminalBlock", "");
            currentNav[0].className = currentNav[0].className.replace(" terminalNavActive", "");
  
            this.className += " terminalNavActive";
            current.className += " showTerminalBlock"
            
        });
    }
});  



