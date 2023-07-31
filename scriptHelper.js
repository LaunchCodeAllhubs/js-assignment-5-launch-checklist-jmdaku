
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
      document.missionTarget.innerHTML = `
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
    if(testInput === ""){
        return "Empty";    
    }
    else if(isNaN(Number(testInput))){
        return "Not a Number";
    }
    else if(!isNaN(Number(testInput))){
        return "Is a Number";
    }
}

  

  function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        //list?
        let pilotStatus = document.getElementById(pilotStatus);
        let copilotStatus =document.getElementById(copilotStatus);
        let launchStatus = document.getElementById(launchStatus);
        let fuelStatus = document.getElementById(fuelStatus);
        let cargoStatus = document.getElementById(argoStatus);
        let faultyItems = document.getElementById(faultyItems);
    
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
            copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
            //both fail
            if((fuelLevel < 10000) && (cargoLevel > 10000)){
               faultyItems.visible = visible;
               fuelStatus.innerHTML = "Fuel level too low for launch";
               cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
               document.launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
               document.launchStatus.style.color = red
            }
            // 1st fail
            else if((fuelLevel < 10000) && (cargoLevel <= 10000)){
                faultyItems.visible = visible;
                fuelStatus.innerHTML = "Fuel level too low for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch"
                launchStatus.style.color = red 
            }
            //2nd fail
            else if((fuelLevel >=10000) && (cargoLevel > 10000)){
                faultyItems.visible = visible;
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch"
                launchStatus.style.color = red    
            } 
            //both pass
            else if(fuelLevel >=10000 && cargoLevel <= 10000){
                faultyItems.visible = hidden;
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle Is Ready for Launch"
                launchStatus.style.color = green  
            }    
        }       
}    


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

   
}

function pickPlanet(planets) {
   let randomPlanet = planets[Math.floor((Math.random())*planets.length)]; 
   return randomPlanet;
}

//console.log tests
//console.log(addDestinationInfo("document", "Earth", 3000, "Sol", 0, 1, "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg"));
console.log(validateInput(""));
console.log(validateInput(100));
console.log(validateInput("Ani"));
console.log(myFetch());
console.log(pickPlanet(["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus", "Venus"]));
//console.log()


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
