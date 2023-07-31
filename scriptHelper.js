// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";    
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else if(!isNaN){
        return "Is a Number";
    }
}

    
  function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        //list?
    form.addEventListener("submit", function(event){
        if(validateInput(fuelLevel) === "Empty" || validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(cargoLevel) === "Empty"){
            alert("Please complete all fields.");
        }
        else if((validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")){
            alert("Please enter a number.");
        }
        else if((validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number")){
            alert("Please enter a name.");
        }
        else if ((validateInput(fuelLevel) === "Is a Number") && (validateInput(cargoLevel) === "Is a Number")){
            //both fail
            if((fuelLevel < 10000) && (cargoLevel > 10000)){
               document.getElementById(faultyItems) = visible;
               fuelStatus.innerHTML = "Fuel level too low for launch";
               cargoLevel.innerHTML = "Cargo mass too heavy for launch"; 
               document.getElementById(launchStatus) = "Shuttle Not Ready for Launch"; 
               //document.getElementById(launchStatus) = color: #C7254E 
            }
            // 1st fail
            else if((fuelLevel < 10000) && (cargoLevel <= 10000)){
                document.getElementById(faultyItems) = visible;
                fuelStatus.innerHTML = "Fuel level too low for launch";
                cargoLevel.innerHTML = "Cargo mass low enough for launch";
                document.getElementById(launchStatus) = "Shuttle Not Ready for Launch"
               //document.getElementById(launchStatus) = color: #C7254E  
            }
            //2nd fail
            else if((fuelLevel >=10000) && (cargoLevel > 10000)){
                document.getElementById(faultyItems) = visible;
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoLevel.innerHTML = "Cargo mass too heavy for launch";
                document.getElementById(launchStatus) = "Shuttle Not Ready for Launch"
               //document.getElementById(launchStatus) = color: #C7254E    
            } 
            //both pass
            else if(fuelLevel >=10000 && cargoLevel <= 10000){
                document.getElementById(faultyItems) = hidden;
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoLevel.innerHTML = "Cargo mass low enough for launch";
                document.getElementById(launchStatus) = "Shuttle Is Ready for Launch"
               //document.getElementById(launchStatus) = color: #419F6A   
            }    
        } 
        document.getElementById(pilotStatus) = `Pilot ${pilot} is ready for launch`;
        document.getElementById(copilotStatus) = `Copilot ${copilot} is ready for launch`;
        event.preventDefault();    
    });
}    

// Maybe not the right spot for EH


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
