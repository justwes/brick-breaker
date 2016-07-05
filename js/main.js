// game's global variable
var game;
// after everything is loaded, then
window.onload = function () {
	// initialize the game object
	game = new Phaser.Game(640, 400, Phaser.AUTO, 'phaser_game');
};