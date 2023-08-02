
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
        let missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                 `
}

function validateInput(testInput) {
    
    if(testInput=== ""){
        return "Empty";    
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else if(!isNaN(testInput)){
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let green = "#419F6A"; 
    let red = "#C7254E";
   
    //pilot
    if (validateInput(pilot) === "Empty"){
            alert("Please complete all fields.");
        }
        else if((validateInput(pilot) === "Is a Number")){
            alert("Please enter a name."); 
        } else {
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;    
        }

    //copilot
    if (validateInput(copilot) === "Empty"){
        alert("Please complete all fields.");
        }
        else if((validateInput(copilot) === "Is a Number")){
            alert("Please enter a name."); 
        } else {
            copilotStatus.innerHTML = `Pilot ${copilot} is ready for launch`;    
        }

    //fuel
    if (validateInput(fuelLevel === "Empty")){
        alert("Please complete all fields.");
        }
        else if((validateInput(fuelLevel) === "Not a Number")){
            alert("Please enter a number."); 
        }
        else if(fuelLevel < 10000){
           list.style.visibility = "visible";
           fuelStatus.innerHTML = "Fuel level too low for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
           launchStatus.style.color = red;
        } else {
            list.style.visibility = "hidden";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = green;  
        }  
        
    //cargo
    if (validateInput(cargoLevel) === "Empty"){
        alert("Please complete all fields.");
        }
        else if (validateInput(cargoLevel) === "Not a Number"){
            alert("Please enter a number."); 
        }
        else if (cargoLevel > 10000){
           list.style.visibility = "visible";
           cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
           launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
           launchStatus.style.color = red;
        } else {
            list.style.visibility = "hidden";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = green;  
        }       
 }  

 //let list = document.getElementById("faultyItems");
    
    //still has alerts when all fields are correct
    //faulty not updating
    //cargoMass vs cargoLevel
    //need to id field?
    //reread forms
    //form.email.value


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
        });
    //console.log(planetsReturned);    
    return planetsReturned;

}

function pickPlanet(planets) {
   let randomPlanet = planets[Math.floor((Math.random())*planets.length)]; 
   return randomPlanet;
}

//console.log tests
// console.log(validateInput(""));
// console.log(validateInput(100));
// console.log(validateInput("1000"));
// console.log(validateInput("Ani"));
// console.log(validateInput(Number("")));



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
