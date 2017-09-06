var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

	oldSolarSystem.getPlanets = function(){
		// console.log("planets", planets);
		return planets;
	}

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	}

	return oldSolarSystem;
})(SolarSystem || {});

//Don't always have to use get and set methods. use what makes sense.