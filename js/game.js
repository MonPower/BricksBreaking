var gamex = 900;
var gamey = 610;
var id = 0;
//create the game
game = new Phaser.Game(gamex, gamey, Phaser.AUTO, "game");

//adds the states
game.state.add("load", loadState);
game.state.add("play", playState);
game.state.add("menu", menuState);
game.state.add("loadok", okState);
game.state.add("gameOver", gameOverState);

game.state.start("load");