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
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
            if(){
                
            }
           alert("submit clicked");
       
     });
   
}

//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. 

//submitButton.addEventListener("click", (event) => {    
    
    //const typeInput = document.querySelector("input[name=type-input]:checked");
   
    //if (typeInput === null) {
        //alert("Please complete all fields.");
    //} else if (keywordInput.value !== "" && !keywordInput.value.trim().match(/^[A-Za-z0-9\-]+$/)) {
        //alert("\nPlease enter a single keyword with only letters and/or numbers.");
    //} else {
       
        //handleSubmitClick(typeInput);
    //}
    
    //event.preventDefault();
//});









function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

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
