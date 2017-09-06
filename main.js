
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
SolarSystem.setPlanet("Planet X");

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets);

let mySpacecraft = SolarSystem.getSpacecraft();
console.log("mySpacecraft", mySpacecraft);

let myStars = SolarSystem.getStars();
console.log("myStars", myStars);
