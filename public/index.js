window.onload = page;
function page() {
var gameType = document.getElementById("game-type");
var hessPic = document.getElementsByClassName('hess');
console.log(hessPic);
var bennyPic = document.getElementsByClassName('benny');

	bennyPic[0].onclick = function() {
	console.log("hii");
	gameType.textContent = "Benny";
	document.getElementsByClassName('begin')[0].href = 'game/benny';
	/*element.setAttribute('href','link);*/
};

hessPic[0].onclick = function() {
	console.log("hii");
	gameType.textContent = "Hess";
	document.getElementsByClassName('begin')[0].href = 'game/hess';
	/*element.setAttribute('href','link);*/
};
}