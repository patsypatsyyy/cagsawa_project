let question1 = {
    question: "How do I get to the Cagsawa Bus Ermita terminal?",
    answer: "Take the LRT-1 until the Pedro Gil station. From there, take a 15 minute walk to the Cagsawa Ermita bus terminal."
}

let question2 = {
    question: "How do I book Cagsawa Bus tickets?",
    answer: "You can book Cagsawa one way and roundtrip bus tickets online with PH Bus. Visit book.phbus.com and select your routes, dates, and number of passengers."
}

let question3 = {
    question: "What are the schedules of Cagsawa Bus?",
    answer: "Cagsawa Bus has daily departures for majority of its routes. Schedules vary per terminal. You can check the exact time table of trips on PHBus."
}

let question4 = {
    question: "Do I get a fare discount or a promo rate as a student or senior with Cagsawa Bus?",
    answer: "Child, Student, Senior, and PWD discounts of 20% apply for tickets bought from the bus terminal only."
}

let question5 = {
    question: "What areas and provinces does Cagsawa Bus serve?",
    answer: "Cagsawa Bus operates trips to and from Manila and the Bicol region. Specifically to and from Naga, Legazpi, Bato, Daraga, Baao, Nabura, Polangui, Camalig, Tabaco City, Oas, Ligao, Guinobatan, and Albay."
}

let question6 = {
    question: "How much are the ticket fares of Cagsawa Bus?",
    answer:"<pre>    Manila to Naga: ₱760+<br>    Manila to Albay: ₱895+ <br>    Manila to Legazpi: ₱760+</pre>"
}

let question7 = {
    question: "How long is the travel time?",
    answer: "These are the estimated travel times for Cagsawa Bus's popular routes. Actual duration of the trip will depend on traffic conditions: <pre><br>    Manila to Naga: 8-9 hours<br>    Manila to Albay: 9-10 hours<br>    Manila to Legazpi: 9-10 hours</pre>"
}

let question8 = {
    question: "Can I rent a Cagsawa Bus for private purposes?",
    answer: "To rent a private bus or coaster, visit Bus Rental Manila. You'll find the rates and booking request form for your preferred travel arrangement on the website"
}

let question9 = {
    question: "How do I ship cargo through Cagsawa Bus?",
    answer: "Visit the bus terminal directly to drop off your parcel. After paying and filling out the necessary forms, your parcel will be accepted. Delivery may take several days depending on the destination."
}

let question10 = {
    question: "Do you offer Transit Advertisements on Cagsawa Buses?",
    answer: "We offer ad placements on bus rear, bus side, bus seats and bus terminals. To request for a quotation, please fill out our form."
}

//-------------------------------------------------------------//

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

for (i = 0; i < questions.length; i++){
    let listElement = document.createElement("li");
    let inputElement = document.createElement("input");
    let labelElement = document.createElement("label");
    let divElement = document.createElement("div");
    let pElement = document.createElement("p");

    listElement.className = "faqCard"
    inputElement.type = "radio";
    inputElement.name = "faqCard";
    inputElement.id = `faqCard${i}`;
    labelElement.htmlFor = inputElement.id;
    labelElement.textContent = questions[i].question;
    divElement.className = "answer";
    pElement.innerHTML = questions[i].answer;

    document.querySelector(".faqCardHolder").append(listElement);
    document.getElementsByClassName("faqCard")[i].append(
        inputElement,
        labelElement,
        divElement
    )
    document.getElementsByClassName("answer")[i].append(pElement);
}