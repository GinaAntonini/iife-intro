var SolarSystem = (function(oldSolarSystem){
	const stars = ["sun", "north star", "andromeda", "centaurus", "gemini"];

	oldSolarSystem.getStars = function(){
		return stars;
	}

	oldSolarSystem.setStars = function(){
		stars.push(newPlanet);
	}

	oldSolarSystem.shiftyStars = function(){
		stars.shift();
	}

	return oldSolarSystem;
})(SolarSystem || {});