var gameType = document.getElementById("game-type");
var hess = document.getElementsByClassName("hess")[0];
var benny = document.getElementsByClassName("benny")[0];

benny.onclick = function() {
	console.log("hii");
	gameType.textContent = "Benny";
	/*element.setAttribute('href','link);*/
}

hess.onclick = function() {
	console.log("hii");
	gameType.textContent = "Hess";
	/*element.setAttribute('href','link);*/
}