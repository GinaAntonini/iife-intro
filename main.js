
// function moreCrap (){
// 	console.log("hi");
// }

// let Something = (function(oldSomething){
// 	const animals = ["cat", "dog"];
// 	SomethingOld.niceFunction = function(){
// 		console.log("im a nice function");
// 	}

// 	return oldSomething;

// })(Something || {});

var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
		const spacecraft = ["orion", "lynx", "dragon", "dreamchaser"];

	oldSolarSystem.getPlanets = function(){
		// console.log("planets", planets);
		return planets;
	}

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	}

	oldSolarSystem.getSpacecraft = function(){
		// console.log("spacecraft", spacecraft);
		return spacecraft;
	}

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecraft.push(newSpacecraft);
	}

	return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets);

