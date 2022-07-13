// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert("Pilot and co-pilot fields must be names, Fuel Level and Cargo Mass fields must be numbers.")
        return;
    }
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    document.getElementById("pilotStatus").innerHTML = `${pilot} Ready`;
    document.getElementById("copilotStatus").innerHTML = `${copilot} Ready`;
    if (Number(fuelLevel) < 10000) {
        console.log('fuel less than 10000');
        document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        list.style.visibility = "visible";
    }
    if (Number(cargoLevel) > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        list.style.visibility = "visible";
    }
    if (Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
        list.style.visibility = "visible";
    }
    console.log('Form submission completed?');
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*(planets.length))];
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
