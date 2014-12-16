(function(window) {

    
	this.circleMask;
    this.vx;
    this.vy;
        
    function Slice(image, radius) {

        this.initialize();

        var canvas = document.getElementById("testCanvas");
        this.image = image;
        
        this.regX = image.width * 0.5;
        this.regY = image.height * 0.5;

        vx = 0;
        vy = 0;
        
        if (radius > 0) {

        	this.circleMask = new createjs.Shape();
	        this.circleMask.graphics.beginFill("0xFFF");
			this.circleMask.graphics.drawCircle(0,0,radius);
			this.circleMask.graphics.endFill(); 
			
        } 
        
    }


    Slice.prototype = new createjs.Bitmap();

    Slice.prototype.circleMask;
    Slice.prototype.vx;
    Slice.prototype.vy;

    Slice.prototype.Bitmap_initialize = Slice.prototype.initialize;

    Slice.prototype.initialize = function() {
        this.Bitmap_initialize();
    }


    Slice.prototype.setNose = function (noseX, noseY) {
       
        this.regX = noseX;
        this.regY = noseY;

        if (this.circleMask) {
            this.mask = this.circleMask;
        }
    }

    Slice.prototype.update = function (targetX, targetY) {
    	
        var diffx, diffy, ax, ay;
        
        diffx = targetX - this.x;
        diffy = targetY - this.y;
            
        ax = diffx * SPRING;
        ay = diffy * SPRING;
        
        vx += ax;
        vy += ay
    
        vx *= FRICTION;
        vy *= FRICTION;
        
        this.x += vx;
        this.y += vy;

        if (this.circleMask) {
            this.circleMask.x = this.x;
            this.circleMask.y = this.y;
        }
       
    }

    Slice.prototype.normalize = function (p) {
    	var length = Math.sqrt(p.x*p.x+p.y*p.y);
    	return 	new createjs.Point((p.x/length), (p.y/length));
	}

    window.Slice = Slice;
}(window));

		