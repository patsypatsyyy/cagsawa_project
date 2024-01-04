let tabacoTerminal = {
    locationName: "CAGSAWA Bus Terminal Tabaco",
    address: "Main Office 2F Rosita Ang Bldg. A.A. Berces St., Ziga Avenue, Tabaco City",
    contactNum: "+63(052)487-5318, +63(052)830-1338, +63(052)998-9050, +63(02)429-1530",
    imageSource: "images/terminal_page/terminal_tabaco.png",
    googleMapLink: "https://www.google.com/maps/place/Cagsawa+Bus+Lines/@13.357787,123.729723,16z/data=!4m6!3m5!1s0x33a1adb8093470f5:0x6aed8a4442925069!8m2!3d13.3577871!4d123.729723!16s%2Fg%2F1v44bhd1?hl=en&entry=ttu"
}

let quezonTerminal = {
    locationName: "CAGSAWA Bus Terminal Quezon",
    address: "General Romulo Avenue, Araneta Center, Quezon City",
    contactNum: "0917-346-1133",
    imageSource: "images/terminal_page/terminal_quezon.png",
    googleMapLink: "https://www.google.com/maps/place/Cagsawa+Bus+Line/@14.617977,121.003337,16z/data=!4m6!3m5!1s0x3397b7d6c2a43ced:0x828d7dae7e064533!8m2!3d14.6179766!4d121.0033368!16s%2Fg%2F11hf7ccjfh?ll=14.617977,121.003337&z=16&t=m&hl=en&gl=BD&mapclient=embed&cid=9407313385038955827&entry=tts&shorturl=1"
}

let cubaoTerminal = {
    locationName: "CAGSAWA Bus Terminal Cubao",
    address: "Araneta Center Bus Station, Times Square Ave, Cubao, Quezon City, 1109 Metro Manila",
    contactNum: "+63(02)8913-1514",
    imageSource: "images/terminal_page/terminal_cubao.png",
    googleMapLink: "https://www.google.com/maps/place/Araneta+Center+Bus+Terminal/@14.62128,121.05535,17z/data=!4m6!3m5!1s0x3397b7bfee61b941:0xb2c61757c93cdc98!8m2!3d14.62128!4d121.05535!16s%2Fg%2F11_qn9rg0?ll=14.62128,121.05535&z=17&t=m&hl=en&gl=BD&mapclient=embed&cid=12882009449945685144&entry=tts&shorturl=1"
}

let ermitaTerminal = {
    locationName: "CAGSAWA Bus Terminal Ermita",
    address: "472 Padre Faura St, Ermita, Manila, 1000 Metro Manila",
    contactNum: "+63(02)525-9756, 0906-448-0110, 0925-617-2005",
    imageSource: "images/terminal_page/terminal_ermita.png",
    googleMapLink: "https://www.google.com/maps/place/Cagsawa+Travel+And+Tours/@14.576932,120.980718,16z/data=!4m6!3m5!1s0x3397ca2ed93ec8d9:0x5b1ca8cbc7724083!8m2!3d14.5769324!4d120.9807178!16s%2Fg%2F1tgw_kbt?ll=14.576932,120.980718&z=16&t=m&hl=en&gl=BD&mapclient=embed&cid=6565307949977321603&entry=tts&shorturl=1"
}

let legazpiTerminal = {
    locationName: "CAGSAWA Bus Terminal Legazpi",
    address: "Legazpi Bus Terminal Bitano Tahao Rd., Legazpi City",
    contactNum: "0932-880-9633",
    imageSource: "images/terminal_page/terminal_legazpi.png",
    googleMapLink: "https://www.google.com/maps/place/Cagsawa+Travel+And+Tours,+Inc./@13.143419,123.74547,16z/data=!4m6!3m5!1s0x33a103d665326d25:0xb0e7fae30f0f6d42!8m2!3d13.1434188!4d123.74547!16s%2Fg%2F11dx9dzjf_?ll=13.143419,123.74547&z=16&t=m&hl=en&gl=BD&mapclient=embed&cid=12747433123412667714&entry=tts&shorturl=1"
}

const terminals = [tabacoTerminal, legazpiTerminal, quezonTerminal, cubaoTerminal, ermitaTerminal];

for(i = 0; i < terminals.length; i++){
    let locationDiv = document.createElement("div");
    let locationTitle = document.createElement("h2");
    let locationAddress = document.createElement("p");
    let locationContactNumbers = document.createElement("p");

    let locationSubDiv = document.createElement("div");
    let locationBtnDiv = document.createElement("div");
    let locationImageE = document.createElement("img");
    let locationLinkE = document.createElement("a");
    let locationButtonE = document.createElement("button");

    if(i == 0){
        locationDiv.className = "terminalBlock showTerminalBlock";
    } else {
        locationDiv.className = "terminalBlock";
    } 

    locationTitle.className = "h2-text-style";
    locationContactNumbers.className = "p-text-style";
    locationAddress.className = "p-text-style";

    locationTitle.textContent = terminals[i].locationName;
    locationContactNumbers.innerHTML = `<strong>Contact Number(s):</strong> ${terminals[i].contactNum}`;
    locationAddress.innerHTML = `<strong>Address:</strong> ${terminals[i].address}`;
    locationAddress.style.marginTop = "3%";


    // INSERTED FUNCTION //
    let btnTxt = document.createTextNode("Open Link");
    locationButtonE.appendChild(btnTxt);
    locationLinkE.href = terminals[i].googleMapLink;

    locationImageE.className = "terminalMapImage";
    locationImageE.src = terminals[i].imageSource;

    locationLinkE.className = "googleMapsLink";
    locationSubDiv.className = "locationSubDiv";
    locationBtnDiv.className = "locationBtnDiv";
    
    
    document.querySelector(".location-container").append(locationDiv);
    document.getElementsByClassName("terminalBlock")[i].append(
        locationTitle, 
        locationSubDiv,
        locationAddress, 
        locationContactNumbers);
        
        document.getElementsByClassName("locationSubDiv")[i].append(locationImageE);
        document.getElementsByClassName("locationSubDiv")[i].append(locationBtnDiv);
        document.getElementsByClassName("locationBtnDiv")[i].appendChild(locationLinkE);
        document.getElementsByClassName("googleMapsLink")[i].append(locationButtonE);
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