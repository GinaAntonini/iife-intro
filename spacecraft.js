var SolarSystem = (function(oldSolarSystem){
	const spacecraft = ["orion", "lynx", "dragon", "dreamchaser"];

	oldSolarSystem.getSpacecraft = function(){
		// console.log("spacecraft", spacecraft);
		return spacecraft;
	}

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecraft.push(newSpacecraft);
	}

		oldSolarSystem.wreckSpacecraft = function(){
		spacecraft.pop();
	}

	return oldSolarSystem;
})(SolarSystem || {});