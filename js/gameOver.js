var ballOnBars = true;
var gamestart = true;
var newlevel = false;
var brickNum = 0;
var level = 1;
var score = 0;
var score1 = -1;
gameOverState = {
	create: function() {

		this.game.add.sprite(0, 0, 'background');
		var text1 = this.game.add.text(gamex/2, gamey/2-100, 'Game Over!', { font: '30px Helvetica', fill: '#fff' });
		var text2 = this.game.add.text(gamex/2, gamey/2, 'Press Space To Restart', { font: '30px Helvetica', fill: '#fff' });
		text1.anchor.setTo(0.5, 0.5);
		text2.anchor.setTo(0.5, 0.5);
	},

	update:function() {
		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			ballOnBars = true;
			gamestart = true;
			newlevel = false;
			brickNum = 0;
			level = 1;
			score = 0;
            score1 = -1;
			newgame = 1;
			game.state.start("menu");
		};
	}
};