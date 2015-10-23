loadState = {

    preload:function() {
        //loads everything
        game.stage.backgroundColor = '#b4b4b4';
        game.load.image('loading', 'assets/loading.png');
    },

    create:function() {
        game.state.start("loadok");
    }
};

okState = {
    preload:function() {
        //loads everything
        //game.stage.backgroundColor = '#b4b4b4';
        var loadingText = this.game.add.text(gamex/2, gamey/2, 'Loading...', { font: '30px Helvetica', fill: '#000' });
        loadingText.anchor.setTo(0.5, 0.5);
        var preloading = this.game.add.sprite(gamex/2-64, gamey/2+50, 'loading');
        game.load.image('loading', 'assets/loading.png');
        game.load.image('title', 'assets/title.png');
        game.load.image('background', 'assets/bk1.jpg');
        game.load.image('ball', 'assets/ball.png');
        game.load.image('bar', 'assets/paddle.png');
        game.load.image('brick', 'assets/b1.png');
        game.load.image('brick1', 'assets/b2.PNG');
        game.load.image('brick2', 'assets/b3.png');
        game.load.image('brick3', 'assets/b4.png');
        game.load.image('playbutton', 'assets/play_button.jpg');
        game.load.image('highscore', 'assets/hign_score.jpg');
        game.load.image('show', 'assets/show.jpg');
        game.load.image('login', 'assets/login.jpg');
        game.load.image('register', 'assets/register.jpg');
        game.load.spritesheet('kaboom', 'assets/explosion.png', 64, 64, 23);
        game.load.audio('boom', 'assets/explode.wav');
        game.load.audio('shot', 'assets/shot.wav');
        this.game.load.setPreloadSprite(preloading);
    },

    create:function() {
        game.state.start("menu");
    }
};