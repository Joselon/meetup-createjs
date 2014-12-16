var NUM_SLICES = 50;
var FRICTION = 0.2;
var SPRING = 2;


(function(){
	
	this.animate;
	this.slices;
	this.stage;
	this.image;
	
	
 	this.init = function() {
		
		this.animate = false;
		this.slices = [];
		
		this.image = new Image();
		this.image.onload = handleImageLoad;
		this.image.src = "900x470.png";
	}
	
	this.handleImageLoad = function () {

		var canvas = document.getElementById("testCanvas");
		stage = new createjs.Stage(canvas);
		stage.enableMouseOver()
		
		
		var ratio = image.width/(NUM_SLICES + 1);
		var s;
		for (var i = 0; i < NUM_SLICES; i++) {
			
			if (i == 0) {
				s = new Slice ( image, -1 );
			} else {
				s = new Slice ( image, (image.width - i * ratio) * 0.5 );				

			}
			s.x = canvas.width * 0.5;
			s.y = canvas.height * 0.5;
            
			stage.addChild(s);
			
			
			slices.push(s);
		}
		

		//add stage events
		stage.onClick = function (event) {
			
			if (animate) return;
			
			var p = slices[0].globalToLocal(event.stageX, event.stageY);
			var len = slices.length;
			
			for (var i = 0; i < len; i++) {
				slices[i].setNose(p.x, p.y);			
			}

			animate = true;
		}

		stage.update();
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addListener(window);
	}

	
	
	this.tick = function () {
		
		if (animate) {

			var len = slices.length;
			var s;
			var previous;

			for (var i = len-1; i >= 0; i--) {
				s = slices[i];
				if (i == len-1) {
					s.update(stage.mouseX, stage.mouseY);
				} else {
					previous = slices[i + 1];
					s.update(previous.x, previous.y);
				}
			}
			
		}

		stage.update();
	}


})();

window.onload = init;