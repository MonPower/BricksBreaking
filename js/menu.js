menuState = {
	//draw the text
	create:function() {
		var value = 6;
		this.game.add.sprite(0, 0, 'background');
		this.title = this.game.add.sprite(gamex/2,gamey/4,'title');
		this.title.anchor.setTo(0.5,0.5);
		this.title.scale.setTo(0.6,0.6);
		//var text = this.game.add.text(gamex/2, gamey/2, '~click to start~', { font: '30px Helvetica', fill: '#fff' });
        //text.anchor.setTo(0.5, 0.5);
        this.playbutton = this.game.add.button(gamex/2-55, 300, "playbutton", this.buttonplay);
        this.highscore = this.game.add.button(gamex/2-55, 370, "highscore", this.scorehigh);
        this.lgoin = this.game.add.button(gamex/2-55, 440, "login", this.loginbutton);
        this.register = this.game.add.button(gamex/2-55, 510, "register", this.registerbutton);
	},
	
	buttonplay: function() {
		game.state.start("play");
	},

	scorehigh: function() {
		//alert(id);
			var obj = new Object();
			obj.name="score";
			window.showModalDialog("score.php",obj,"dialogWidth=800px;dialogHeight=600px");
	},

	loginbutton: function() {
		var obj = new Object();
		obj.name="sublogin";
		window.showModalDialog("login.php",obj,"dialogWidth=380px;dialogHeight=210px; resizable:no");
		/*if (window.XMLHttpRequest)
	    {// code for IE7+, Firefox, Chrome, Opera, Safari
	 	    xmlhttp=new XMLHttpRequest();
	    }
		else
	  	{// code for IE6, IE5
	  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	 	}
		xmlhttp.onreadystatechange=function()
	 	{
	 		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		    {
		    	document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
		    	id = document.getElementById("txtHint").innerHTML;
		    	//alert(id);
		    }
	    }
		xmlhttp.open("GET","login1.php",true);
		xmlhttp.send();*/
	},

	registerbutton: function() {
		var obj = new Object();
		obj.name="subregister";
		window.showModalDialog("register.php",obj,"dialogWidth=380px;dialogHeight=200px"); 
	},

	getID: function() {

	}
};
