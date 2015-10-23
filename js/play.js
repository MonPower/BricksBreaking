// var ballOnBars = true;
// var gamestart = true;
// var newlevel = false;
// var brickNum = 0;
// var level = 1;
// var score = 0;
var newgame = 1;
playState = {

	create:function() {
		this.game.add.sprite(0, 0, 'background');
		this.platforms = this.game.add.group();
	    this.platforms.enableBody = true;
	    
	    this.barx = this.platforms.create(gamex/2,gamey-70,'bar');
	    this.barx.anchor.setTo(0.5, 0.5);
	    //this.barx.scale.setTo(1,1);
	    this.barx.body.immovable = true;
	    this.barx.body.collideWorldBounds = true;
	    
	    this.game.physics.enable(this.barx, Phaser.Physics.ARCADE);

	    //add the breaker--ball
	    this.breaker = this.game.add.sprite(this.barx.body.x, this.barx.body.y-21, 'ball');
	    this.breaker.scale.setTo(0.45,0.45);
	    this.game.physics.enable(this.breaker, Phaser.Physics.ARCADE);
	    this.breaker.body.bounce.set(1);
	    this.breaker.anchor.setTo(0.5, 0.5);
	    this.breaker.body.collideWorldBounds = true;

	    this.boomsound = this.game.add.audio('boom');
	    this.boomsound.addMarker('boom',1,0);
	    this.shotsound = this.game.add.audio('shot');
	    this.shotsound.addMarker('shot',1,0);

	    this.explosions = this.game.add.group();
	    for (var i = 0; i < 10; i++)
	    {
	        this.explosionAnimation = this.explosions.create(0, 0, 'kaboom', [0], false);
	        this.explosionAnimation.anchor.setTo(0.5, 0.5);
	        this.explosionAnimation.animations.add('kaboom');
	    }

	    this.bricks = this.game.add.group();
	    this.bricks.enableBody = true;
	    if (level == 1)
	    {
		    for (var j = 0; j < 1; j++)
		    {
		        for (var i = 1+j; i < 27-j; i++)
		        {
		        	if (i % 2 == 0)
		            {
		            	brick = this.bricks.create(i*32, 80+16*j, 'brick');
		            	brick.body.immovable = true
		            }
		            else
		            {
		            	brick = this.bricks.create(i*32, 80+16*j, 'brick2');
		            	brick.body.immovable = true
		            }
		          	brickNum++;
		        }
		    }
		}
		if (level == 2)
	    {
		    for (var j = 0; j < 9; j++)
		    {
		        for (var i = 1+j; i < 18-j; i++)
		        {
		        	if (i % 2 == 0)
		            {
		            	brick = this.bricks.create(i*32, 80+16*j, 'brick');
		            	brick.body.immovable = true
		            }
		            else
		            {
		            	brick = this.bricks.create(i*32, 80+16*j, 'brick2');
		            	brick.body.immovable = true
		            }
		          	brickNum++;
		        }
		    }

		    for (var j = 9; j > 0; j--)
		    {
		        for (var i = 1+j; i < 18-j; i++)
		        {
		        	if (i % 2 == 0)
		            {
		            	brick = this.bricks.create(320+i*32, 220-16*j, 'brick1');
		            	brick.body.immovable = true
		            }
		            else
		            {
		            	brick = this.bricks.create(320+i*32, 220-16*j, 'brick3');
		            	brick.body.immovable = true
		            }
		          	brickNum++;
		        }
		    }
		}
	    if (level == 3)
	    {
		    for (var i = 0; i < 15; i++)
		    {
		    	brick = this.bricks.create(50+32, 100+16*i, 'brick3');
		        brick.body.immovable = true
		        brick = this.bricks.create(50+64, 100+16*i, 'brick2');
		        brick.body.immovable = true
		        brick = this.bricks.create(50+96, 100+16*i, 'brick3');
		        brick.body.immovable = true
		    }

		    for (var i = 0; i < 15; i++)
		    {
		    	brick = this.bricks.create(50+200+32, 100+16*i, 'brick3');
		        brick.body.immovable = true
		        brick = this.bricks.create(50+200+64, 100+16*i, 'brick2');
		        brick.body.immovable = true
		        brick = this.bricks.create(50+200+96, 100+16*i, 'brick3');
		        brick.body.immovable = true
		    }

		    for (var i = 0; i < 15; i++)
		    {
		    	brick = this.bricks.create(50+400+32, 100+16*i, 'brick3');
		        brick.body.immovable = true
		        brick = this.bricks.create(50+400+64, 100+16*i, 'brick2');
		        brick.body.immovable = true
		        brick = this.bricks.create(50+400+96, 100+16*i, 'brick3');
		        brick.body.immovable = true
		    }

		    for (var i = 0; i < 15; i++)
		    {
		    	brick = this.bricks.create(50+600+32, 100+16*i, 'brick3');
		        brick.body.immovable = true
		        brick = this.bricks.create(50+600+64, 100+16*i, 'brick2');
		        brick.body.immovable = true
		        brick = this.bricks.create(50+600+96, 100+16*i, 'brick3');
		        brick.body.immovable = true
		    }
		}
		this.scoreText = this.game.add.text(32, 30, 'score: ' + score, { font: "20px Arial", fill: "#ffffff", align: "left" });
	    this.introText = this.game.add.text(gamex/2, gamey/2, '', { font: "30px Arial", fill: "#ffffff", align: "center" });
    	this.introText.anchor.setTo(0.5, 0.5);
    	if (newgame == 1)
    	{
    		 this.introText.text = 'Press Up Key To Lunch The Ball';
    		 newgame = 0;
    	}
    	//this.rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
	    this.cursors = this.game.input.keyboard.createCursorKeys();
	},

	update: function() {

	    this.game.physics.arcade.overlap(this.breaker, this.platforms, this.ShotSound, null, this);
	    this.game.physics.arcade.overlap(this.breaker, this.bricks, this.BreakBrick, null, this);
	    this.breaker.rotation += this.breaker.body.velocity.x / 500;
	    if (this.breaker.y >= gamey-20)
	    {
	    	this.breaker.body.collideWorldBounds = false;
	    	//this.ball.visible = false;
	   		this.breaker.kill();
	   		//要用到jquery会方便点,post
	   		if(score1!=score){
	   			score1=score;
	   			$.post('/updatescore.php',{'score':score},function(re){
		   			if(re.status){
		   				game.state.start("gameOver");
		   			}else
		   				alert(re.info);
		   			
		   		},'json');
	   		}
	   		
	   		
	    	//this.gameOver();
	    }
	    if (this.cursors.left.isDown && !ballOnBars)
	    {
	        //move to the left
	        this.barx.body.velocity.x = -250;
	    }
	    else if (this.cursors.right.isDown && !ballOnBars)
	    {
	        //move to the right
	        this.barx.body.velocity.x = 250;
	    }
	    else if (this.cursors.up.isDown && gamestart)
	    {
	    	this.introText.visible = false;
	        this.releaseBall ();
	        gamestart = false;
	        this.shotsound.play('shot');
	    }
	    else if (this.cursors.down.isDown && newlevel)
	    {
	    	newlevel = false;
	    	level++;
	    	ballOnBars = true;
	   	 	gamestart = true;
	   		brickNum = 0;
	    	this.create();
	    }
	    else
	    {
	         //stand still
	         this.barx.body.velocity.x = 0;
	    }
	},
	
	ShotSound: function(breaker, platforms) {
    	this.game.physics.arcade.collide(this.breaker, this.platforms, this.brekhitplat, null, this);
    	this.shotsound.play('shot');
	},

	BreakBrick: function(breaker, brick) {
	    //update the collide model
	    this.game.physics.arcade.collide(this.breaker, this.bricks);
	    //Kill the brick(we need some special effect later)
	    kill = brick.kill();
	    if (kill)
	    {
	        this.explosionAnimation = this.explosions.getFirstExists(false);
	        this.explosionAnimation.reset(brick.x, brick.y);
	        this.explosionAnimation.play('kaboom', 40, false, true);
	        this.boomsound.play('boom');
	        score += 10;
	        this.scoreText.text = 'score: ' + score;
	        brickNum--;
	        if (brickNum == 0)
	        {
	        	this.nextlevel();
	        }
	    }
	    //BrickNumber--;
	    //add and update the score
	},

	releaseBall: function() {
	    if (ballOnBars)
	    {
	        ballOnBars = false;
	        this.breaker.body.velocity.y = -400;
	        this.breaker.body.velocity.x = -75;
	    }
	},

	gameOver: function() {

	    this.breaker.body.velocity.setTo(0, 0);
	    this.introText.text = 'Game Over!';
	    this.introText.visible = true;
	},

	brekhitplat: function(breaker, platforms) {

	    var diff = 0;
	    if (this.breaker.x < this.barx.x)
	    {
	        //  Ball is on the left-hand side of the paddle
	        diff = this.barx.x - this.breaker.x;
	        this.breaker.body.velocity.x = (-5 * diff);
	    }
	    else if (this.breaker.x > this.barx.x)
	    {
	        //  Ball is on the right-hand side of the paddle
	        diff = this.breaker.x -this.barx.x;
	        this.breaker.body.velocity.x = (5 * diff);
	    }
	    else
	    {
	        this.breaker.body.velocity.x = 2 + Math.random() * 8;
	    }
	},

	nextlevel: function() {
		this.breaker.body.velocity.setTo(0, 0);
	    this.introText.text = 'Next Level , Press Down Key To Resume';
	    this.introText.visible = true;
		//this.rKey.onDown.add(this.create, this);	
		newlevel = true;
	}
};