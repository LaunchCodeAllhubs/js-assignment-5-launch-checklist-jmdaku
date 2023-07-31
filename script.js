// Write your JavaScript code here!

const { myFetch , addDestinationInfo } = require("./scriptHelper");



window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let image = planet.image;     
        
        addDestinationInfo(document, name, diameter, star, distance, moons, image);
       
        
    });
})
 




form.addEventListener("submit", function(event){
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    event.preventDefault();
});