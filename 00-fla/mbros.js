(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 300,
	fps: 60,
	color: "#FFFFFF",
	manifest: [
		{src:"images/goomba.png", id:"goomba"},
		{src:"images/koopagreen.png", id:"koopagreen"},
		{src:"images/koopared.png", id:"koopared"}
	]
};



// symbols:



(lib.goomba = function() {
	this.initialize(img.goomba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,471);


(lib.koopagreen = function() {
	this.initialize(img.koopagreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,815,1208);


(lib.koopared = function() {
	this.initialize(img.koopared);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,480);


(lib.koopared_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.koopared();
	this.instance.setTransform(-50,-127.6,0.266,0.266);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-127.6,100,127.7);


(lib.koopagreen_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.koopagreen();
	this.instance.setTransform(-50,-74.1,0.123,0.123);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-74.1,100,148.2);


(lib.goomba_mc = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.goomba();
	this.instance.setTransform(-75,-111.1,0.236,0.236);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-111.1,150,111.1);


(lib.goomba_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.mc = new lib.goomba_mc();
	this.mc.setTransform(0,0,1,1,0,0,0,0,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.mc).to({x:163},29,cjs.Ease.get(1)).wait(20).to({skewY:180},0).to({x:3},30,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-55.5,150,111.1);


// stage content:



(lib.mbros = function() {
	this.initialize();

	// Capa 1
	this.k1 = new lib.koopared_1();
	this.k1.setTransform(482,236.1,1,1,0,0,0,0,-63.9);

	this.k0 = new lib.koopagreen_1();
	this.k0.setTransform(363,225.9);

	this.g0 = new lib.goomba_1();
	this.g0.setTransform(75,244.5);

	this.addChild(this.g0,this.k0,this.k1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(275,301.8,532,148.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;