
require('isomorphic-fetch');

// let pilotStatus = document.getElementById(pilotStatus);
// let copilotStatus = document.getElementById(copilotStatus);
// let launchStatus = document.getElementById(launchStatus);
// let fuelStatus = document.getElementById(fuelStatus);
// let cargoStatus = document.getElementById(cargoStatus);
// let list = document.getElementById(faultyItems);

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
    //let list = document.getElementById("faultyItems");
    
    //checks first field vs if and then alerts or moves on.
    //not checking all 4 fields
    //need loop?
    //cargoMass vs cargoLevel
    //need to id field?
    //reread forms


        //any fields blank
        if(validateInput(fuelLevel) === "Empty" || validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(cargoLevel) === "Empty"){
            alert("Please complete all fields.");
        }
        //fuel & cargo amts are not numbers
        else if((validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")){
            alert("Please enter a number.");
        }
        //pilot names are numbers not strings
        else if((validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number")){
            alert("Please enter a name.");
        }
        //rest passed and fuel & cargo amts are numbers
        else if ((validateInput(fuelLevel) === "Is a Number") && (validateInput(cargoLevel) === "Is a Number")){
            let green = "#419F6A"; 
            let red = "#C7254E";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            //both fail
            if((fuelLevel < 10000) && (cargoLevel > 10000)){
               list.style.visibility = "visible";
               fuelStatus.innerHTML = "Fuel level too low for launch";
               cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
               launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
               launchStatus.style.color = red
            }
            // 1st fail
            else if((fuelLevel < 10000) && (cargoLevel <= 10000)){
                list.style.visibility = "visible";;
                fuelStatus.innerHTML = "Fuel level too low for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch"
                launchStatus.style.color = red 
            }
            //2nd fail
            else if((fuelLevel >=10000) && (cargoLevel > 10000)){
                list.style.visibility = "visible";;
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch"
                launchStatus.style.color = red    
            } 
            //both pass
            else if(fuelLevel >=10000 && cargoLevel <= 10000){
                list.style.visibility = "hidden";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle is Ready for Launch"
                launchStatus.style.color = green  
            }    
        }       
}    


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
console.log(validateInput(""));
console.log(validateInput(100));
console.log(validateInput("1000"));
console.log(validateInput("Ani"));
console.log(validateInput(Number("")));

// console.log(myFetch());
// console.log(pickPlanet(["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"]));
//console.log(formSubmission("document", "list", "Ann","Bob", 5000, 15000))


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
