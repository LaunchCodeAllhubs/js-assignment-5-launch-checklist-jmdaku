// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
   
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
       listedPlanetsResponse.then(function(result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        console.log(planet);
        
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;     
        
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
          
    });
  

    let form = document.getElementById("launchForm");

    form.addEventListener("submit", function(event){
         event.preventDefault();
        let pilot = document.getElementById("pilotName").value;
        let copilot = document.getElementsByName("copilotName")[0].value;
        let fuelLevel = document.getElementsByName("fuelLevel")[0].value;
        let cargoLevel = document.getElementsByName("cargoMass")[0].value;
        let list = document.getElementById("faultyItems");     

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);  
    });

  });





// "formSubmission(") x
// "myFetch(") inside x
// "pickPlanet(") x
// "addDestinatonInfo(") x