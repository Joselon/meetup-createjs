var stage, w, h, loader, pipe1height, pipe2height, pipe3height, startX, startY, wiggleDelta;
var background, bird, birds, datas, pos, ground, pipe, bottomPipe, pipes, rotationDelta, logo, logo_envj, counter, counterOutline;
var android, ios, winphone;
var started = false; 
var startJump = false; // Has the jump started?

var puntosInicio = 50;

var jumpAmount = 120; // How high is the jump?
var jumpTime = 266;

var dead = false; // is the bird dead?
var KEYCODE_SPACE = 32;     //usefull keycode
var gap = 250;
var masterPipeDelay = 78; // delay between pipes
var pipeDelay = masterPipeDelay; //counter used to monitor delay

var partidas = 5;

var counterShow = false;

document.onkeydown = handleKeyDown;

var language = window.navigator.userLanguage || window.navigator.language;
var spanish = (language == 'es_LA' || language == 'es_ES');

function init() {
    if (window.top != window) {
        document.getElementById("header").style.display = "none";
    }
    // createjs.MotionGuidePlugin.install();

    stage = new createjs.Stage("testCanvas");
    /* document.getElementById('testCanvas').style.marginTop = '90px';*/
    stage.enableMouseOver( 10 );
    stage.mouseMoveOutside = true;

    createjs.Touch.enable(stage);
    // grab canvas width and height for later calculations:
    w = stage.canvas.width;
    h = stage.canvas.height;

    var animal = 'monkey';

    manifest = [
        {src:"img/ios.png", id:"ios"},
        {src:"img/android.png", id:"android"},
        {src:"img/winphone.png", id:"winphone"},

        {src:"img/"+animal+"0.png", id:"bird0"},
        {src:"img/"+animal+"1.png", id:"bird1"},
        {src:"img/"+animal+"2.png", id:"bird2"},
        {src:"img/"+animal+"3.png", id:"bird3"},
        {src:"img/"+animal+"4.png", id:"bird4"},
        {src:"img/"+animal+"5.png", id:"bird5"},
        {src:"img/"+animal+"6.png", id:"bird6"},
        {src:"img/"+animal+"7.png", id:"bird7"},
        {src:"img/"+animal+"8.png", id:"bird8"},
        {src:"img/"+animal+"_background.png", id:"background"},
        {src:"img/"+animal+"_ground.png", id:"ground"},
        {src:"img/"+animal+"_pipe.png", id:"pipe"},
        {src:"img/restart.png", id:"start"},
        {src:"img/share.png", id:"share"},
        {src:"img/logo.png", id:"logo"},
        {src:"img/logo_envj.png", id:"logo_envj"},
        {src:"img/tw_envideojuegos.png", id:"tw0"},
        {src:"img/tw_flappypet.png", id:"tw1"},
        {src:"fonts/FB.eot"},
/*                    {src:"fonts/FB.svg"},*/
        {src:"fonts/FB.ttf"},
        {src:"fonts/FB.woff"}
    ];

    loader = new createjs.LoadQueue(false);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);
}

function handleComplete() {
    
    background = new createjs.Shape();
    background.graphics.beginBitmapFill(loader.getResult("background")).drawRect(0,0,w,h);

    logo = new createjs.Bitmap(loader.getResult("logo"));
    logo_envj = new createjs.Bitmap(loader.getResult("logo_envj"));
    tw0 = new createjs.Bitmap(loader.getResult("tw0"));
    tw1 = new createjs.Bitmap(loader.getResult("tw1"));
    logo_envj.cursor = 'pointer';
    logo.cursor = 'pointer';
    tw0.cursor = 'pointer';
    tw1.cursor = 'pointer';

    ios = new createjs.Bitmap(loader.getResult("ios"));
    android = new createjs.Bitmap(loader.getResult("android"));
    winphone = new createjs.Bitmap(loader.getResult("winphone"));
    ios.cursor = 'pointer';
    android.cursor = 'pointer';
    winphone.cursor = 'pointer';

    
    var groundImg = loader.getResult("ground");
    ground = new createjs.Shape();
    ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w+groundImg.width, groundImg.height);
    ground.tileW = groundImg.width;
    ground.y = h-groundImg.height;

    birds = [];
    datas = [];
    
    for (var i=0; i<9; i++) {

        datas[i] = new createjs.SpriteSheet({
            "images": [loader.getResult("bird" + i)],
            //set center and size of frames, center is important for later bird roation
            "frames": {"width": 92, "height": 64, "regX": 46, "regY": 32, "count": 3}, 
            // define two animations, run (loops, 0.21x speed) and dive (returns to dive and holds frame one static):
            "animations": {"fly": [0, 2, "fly", 0.21], "dive": [1, 1, "dive", 1]}
        });

        birds[i] = new createjs.Sprite(datas[i], "fly");
    }

    startX = (w/2) - (92/2);
    startY = 512;
    wiggleDelta = 18;

    pos = Math.floor(Math.random() * 9);
    bird = birds[pos];
    bird.alpha = 0;

    // Set initial position and scale 1 to 1
    bird.setTransform(startX, startY, 1, 1);
    // Set framerate
    bird.framerate = 30;

    //338, 512
    // Use a tween to wiggle the bird up and down using a sineInOut Ease
    createjs.Tween.get(bird, {loop:true}).to({y:startY + wiggleDelta}, 380, createjs.Ease.sineInOut).to({y:startY}, 380, createjs.Ease.sineInOut);

    stage.addChild(background);
    pipes = new createjs.Container(); 
    stage.addChild(pipes);

    stage.addChild(bird, ground);

    stage.addChild(tw0);
    stage.addChild(tw1);
    stage.addChild(logo);
    stage.addChild(logo_envj);
    stage.addChild(ios);
    stage.addChild(android);
    stage.addChild(winphone);

    ios.x = 20;
    ios.y = h-80;
    ios.scaleX = ios.scaleY = 1.3;
    android.x = 260;
    android.y = h-80;
    android.scaleX = android.scaleY = 1.3;
    winphone.x = 500;
    winphone.y = h-80;                
    winphone.scaleX = winphone.scaleY = 1.3;


    /*
    logo.x = (w/2) - 101;
    logo.y = (100);
    */
    //logo.x = w/2-250;

    logo.y = 225; 
    logo_envj.x = logo.x + 600;
    logo_envj.y = logo.y + 165;

    tw0.x = 20;
    tw0.y = 20;
    tw1.x = w - 145;
    tw1.y = 20;

    tw0.addEventListener("mousedown", onTW0);
    tw1.addEventListener("mousedown", onTW1);
    logo_envj.addEventListener("mousedown", onTW1);

    ios.addEventListener("mousedown", onTmp);
    android.addEventListener("mousedown", onTmp);
    winphone.addEventListener("mousedown", onTmp);

    stage.addEventListener("stagemousedown", handleJumpStart);

    counter = new createjs.Text(0, "86px 'FlappyPet'", "#ffffff");
    counterOutline = new createjs.Text(0, "86px 'FlappyPet'", "#000000");
    counterOutline.outline = 5;
    counterOutline.textAlign = 'center';
    counter.textAlign = 'center';
    counterOutline.x = w/2;
    counterOutline.y = 20;
    counter.x = w/2;
    counter.y = 20;
    counter.alpha = 0;
    counterOutline.alpha = 0;
    counter.text = puntosInicio;
    counterOutline.text = puntosInicio;

    stage.addChild(counter, counterOutline);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick);

/*
    stage.alpha = 0;
    logo.alpha = 0;
    logo.y += 20;
    logo_envj.alpha = 0;
    logo_envj.y += 20;
    createjs.Tween.get(stage).to({alpha:1}, 300, createjs.Ease.linear);
    createjs.Tween.get(logo).wait(400).to({alpha:1, y:logo.y-20}, 300, createjs.Ease.linear);
    createjs.Tween.get(logo_envj).wait(400).to({alpha:1, y:logo_envj.y-20}, 300, createjs.Ease.linear);
*/

}

function onTmp(e){
    alert('En trámites de aprobación.');
}
function onTW0(e){
    window.open('http://twitter.com/flappypet','_blank');
}
function onTW1(e){
    window.open('http://twitter.com/envideojuegos','_blank');
}


function handleKeyDown(e) {
    //cross browser issues exist
    if(!e){ var e = window.event; }
    switch(e.keyCode) {
        case KEYCODE_SPACE: handleJumpStart();
    }
}

function handleJumpStart(e) {

    //console.log( logo.alpha );

    if( e.stageY>100/* && (logo.alpha == 1 || logo.alpha == 0) */){

        if (!dead) {
            createjs.Tween.removeTweens ( bird );
            bird.gotoAndPlay("jump");
            startJump = true;
            if (!started) {
                started = true;
                counterShow = true;

            }
        }

    }
}

function diveBird() {
    bird.gotoAndPlay("dive");
}

function restart() {

    partidas--;
    if( partidas == 0){

        createjs.Tween.get(stage).to({alpha:0}, 300, createjs.Ease.linear).call(function(){
                document.location.href = '.';
        });

    }else{
        pipes.removeAllChildren();
        createjs.Tween.get(start).to({y:start.y + 10}, 50).call(removeStart);

        counter.text = puntosInicio;
        counterOutline.text = puntosInicio;
        counterOutline.alpha = 0;
        counter.alpha = 0;
        logo.alpha = 1;
        bird.alpha = 0;
        counterShow = false;
        pipeDelay = masterPipeDelay;
        dead = false;
        started = false;
        startJump = false;
        createjs.Tween.removeTweens ( bird );
        bird.x = startX;
        bird.y = startY;
        bird.rotation = 0;
        createjs.Tween.get(bird, {loop:true}).to({y:startY + wiggleDelta}, 380, createjs.Ease.sineInOut).to({y:startY}, 380, createjs.Ease.sineInOut);
    }
}

function die() {
    dead = true
    bird.gotoAndPlay("dive");
    createjs.Tween.removeTweens ( bird )
    createjs.Tween.get(bird).wait(0).to({y:bird.y + 200, rotation: 90}, (380)/1.5, createjs.Ease.linear) //rotate back
            .call(diveBird) // change bird to diving position
            .to({y:ground.y - 30}, (h - (bird.y+200))/1.5, createjs.Ease.linear); //drop to the bedrock
    createjs.Tween.get(stage).to({alpha:0}, 100).to({alpha:1}, 100)
    start = new createjs.Bitmap(loader.getResult("start"));
    start.alpha = 0

    start.x = w/2 - start.image.width/2
    start.y = h/2 - start.image.height/2 - 150
    share = new createjs.Bitmap(loader.getResult("share"));
    share.alpha = 0
    share.x = w/2 - share.image.width/2
    share.y = h/2 - share.image.height/2 - 50

    start.cursor = 'pointer';
    share.cursor = 'pointer';

    stage.addChild(start)
    stage.addChild(share)
    createjs.Tween.get(start).to({alpha:1, y: start.y + 50}, 400, createjs.Ease.sineIn).call(addClickToStart)
    createjs.Tween.get(share).to({alpha:1, y: share.y + 50}, 400, createjs.Ease.sineIn).call(addClickToStart)
    
}
function removeStart() {
    stage.removeChild(start)
    stage.removeChild(share)
}
function addClickToStart() {
    start.useHandCursor = true;
    share.useHandCursor = true;
    start.addEventListener("click", restart);
    share.addEventListener("click", goShare);
}

function goShare() {
    var countText
    if (counter.text == 1) {
        countText = "1 point";
    } else {
        countText = counter.text + " points";
    }
    window.open("https://twitter.com/share?url=http%3A%2F%2Fflappypet.com&text=Try to beat my score: Level 1: " + countText +  " on HTML5 Flappy Pet #flappypet #flappybird");
}

function tick(event) {
    var deltaS = event.delta/1000;

    var l = pipes.getNumChildren();

    if (bird.y > (ground.y - 40)) {
        if (!dead) {
            die()
        }
        if (bird.y > (ground.y - 30)) {
            createjs.Tween.removeTweens ( bird )
        }
    }
    
    if (!dead) {
        ground.x = (ground.x-deltaS*300) % ground.tileW;
    }

    if (started && !dead) {
        if (pipeDelay == 0) {

            pipe = new createjs.Bitmap(loader.getResult("pipe"));
            pipe.x = w+600
            pipe.y = (ground.y - gap*2) * Math.random() + gap*1.5
            pipes.addChild(pipe);
            // createjs.Tween.get(pipe).to({x:0 - pipe.image.width}, 5100)

            pipe2 = new createjs.Bitmap(loader.getResult("pipe"));
            pipe2.scaleX = -1
            pipe2.rotation = 180
            pipe2.x = pipe.x //+ pipe.image.width
            pipe2.y = pipe.y - gap
            // createjs.Tween.get(pipe2).to({x:0 - pipe.image.width}, 5100)

            pipes.addChild(pipe2);

            pipeDelay = masterPipeDelay

        } else {
            pipeDelay = pipeDelay - 1
        }
        for(var i = 0; i < l; i++) {
            pipe = pipes.getChildAt(i);
            if (pipe) {
                if (true) { // tried replacing true with this, but it's off: pipe.x < bird.x + 92 && pipe.x > bird.x 
                    var collision = ndgmr.checkRectCollision(pipe,bird,1,true)
                    if (collision) {
                        if (collision.width > 8 && collision.height > 8) {
                            die()
                        }
                    }
                }
                pipe.x = (pipe.x - deltaS*300);
                if (pipe.x <= 338 && pipe.rotation == 0 && pipe.name != "counted") {
                    pipe.name = "counted" //using the pipe name to count pipes
                    counter.text = counter.text - 1
                    counterOutline.text = counterOutline.text - 1
                }
                if (pipe.x + pipe.image.width <= -pipe.w) { 
                    pipes.removeChild(pipe)
                }
            }
        }

        if (counterShow) {
//            screenfull.request();
//            screenfull.onchange();

            logo.alpha = 0;
            logo_envj.alpha = 0;
            bird.alpha = 1;
            counter.alpha = 1;
            counterOutline.alpha = 1;
            counterShow = false;
        }

    }



    if (startJump == true) {
        startJump = false
        bird.framerate = 60;
        bird.gotoAndPlay("fly");
        if (bird.roation < 0) {
            rotationDelta = (-bird.rotation - 20)/5
        } else {
            rotationDelta = (bird.rotation + 20)/5
        }
        if (bird.y < -200) {
            bird.y = -200
        }
        createjs
            .Tween
            .get(bird)
            .to({y:bird.y - rotationDelta, rotation: -10}, rotationDelta, createjs.Ease.linear) //rotate to jump position and jump bird
            .to({y:bird.y - jumpAmount, rotation: -10}, jumpTime - rotationDelta, createjs.Ease.quadOut) //rotate to jump position and jump bird
            .to({y:bird.y}, jumpTime, createjs.Ease.quadIn) //reverse jump for smooth arch
            .to({y:bird.y + 200, rotation: 90}, (380)/1.5, createjs.Ease.linear) //rotate back
            .call(diveBird) // change bird to diving position
            .to({y:ground.y - 30}, (h - (bird.y+200))/1.5, createjs.Ease.linear); //drop to the bedrock
    }

    
    stage.update(event);
}