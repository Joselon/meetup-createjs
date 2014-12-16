
var canvas, stage, exportRoot;
var loaderBar, bar, imageContainer, currentImage, loaderWidth, loaderColor, borderPadding, preload, oldItem;
var bloqueado = false;

var nivel = 0;
var pulsado = 0;
var casillasAbiertas = 0;
var casillasCompletadas = 0;
var casillasAbiertaA = 0;
var casillasAbiertaB = 0;

var audio_bob, audio_ok;

var volume = 1;

var textosPeces = [
		'¡Hola!, soy un Jurel.',
		'¡Hola!, soy una Caballa.',
		'¡Hola!, soy una Merluza.',
		'¡Hola!, soy una Sardina.',
		'¡Hola!, soy un Boquerón.',
		'¡Hola!, soy un Rabil.',
		'¡Hola!, soy un Pulpo.',
		'¡Hola!, soy un Rape .',
		'¡Hola!, soy una Pota.',
		'¡Hola!, soy una Chirla.',
		'¡Hola!, soy una Almeja fina.',
		'¡Hola!, soy un Pez espada.',
		'¡Hola!, soy una Gamba blanca.',
		'¡Hola!, soy una Cigala.',
		'¡Hola!, soy un Bonito del Norte.',
		'¡Hola!, soy una Dorada.',
		'¡Hola!, soy un Calamar.',
		'¡Hola!, soy una Lubina.',
		'¡Hola!, soy un Besugo.',
		'¡Hola!, soy un Bacalao.',
		'¡Hola!, soy un Mejillón.',
		'¡Hola!, soy una Trucha Arco Iris.',
		'¡Hola!, soy un Rodaballo.',
		'¡Hola!, soy un Gallo.',
		'¡Hola!, soy un Lenguado Europeo.',
		'¡Hola!, soy una Bacaladilla.',
		'¡Hola!, soy una Sepia.',
		'¡Hola!, soy un Congrio.',
		'¡Hola!, soy un Langostino Mediterráneo.',
		'¡Hola!, soy un Salmonete de Roca.'
	];

var textosPeces2 = [
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar y... de agricultura.',
	'¡Has acertado!\nNos pescan en el mar.',

	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nVivo en la arena de la playa.',
	'¡Has acertado!\nVivo en la arena de la playa.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar y... de agricultura.',

	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar y... de agricultura.',
	'¡Has acertado!\nNos pescan en el mar y... de agricultura.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar y... de piscifactoría.',
	'¡Has acertado!\nNos pescan en el mar y... de agricultura.',
	'¡Has acertado!\nNos pescan en el mar.',

	'¡Has acertado!\nNos pescan en el mar y... de agricultura.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.',
	'¡Has acertado!\nNos pescan en el mar.'
]



function loadAudioHandler(event) {
	// This is fired for each sound that is registered.
	var instance = createjs.Sound.play("sound");  // play using id.  Could also use full source path or event.src.
	//instance.addEventListener("complete", createjs.proxy(this.handleComplete, this) );
	//instance.volume = 0.5;
}


function init() {
	canvas = document.getElementById("canvas");
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver();
	
	createjs.MotionGuidePlugin.install();

	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashPlugin]);
//	createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadAudioHandler, (this));
	createjs.Sound.registerSound("../assets/media/bob.mp3|media/bob.ogg", "audio_bob");
	createjs.Sound.registerSound("../assets/media/ok.mp3|media/ok.ogg", "audio_ok");

	images = images||{};

	////////////////////////////////////////////////////////////////////
	// PRECARGA
	////////////////////////////////////////////////////////////////////
	/*
	this.tit = new cjs.Text("Cargando", "50px peraltaregular", "#17457c");
	this.porcentaje = new cjs.Text("0%", "50px peraltaregular", "#17457c");
	this.tit.setTransform(300,200,1,1);
	this.porcentaje.setTransform(300,300,1,1);
	*/

    borderPadding = 10;
    var barHeight = 20;
    loaderWidth = 300;
    loaderColor = createjs.Graphics.getRGB(247,247,247);
    loaderBar = new createjs.Container();
    bar = new createjs.Shape();
    bar.graphics.beginFill(loaderColor).drawRect(0, 0, 1, barHeight).endFill();
    var bgBar = new createjs.Shape();
    var padding = 3
    bgBar.graphics.setStrokeStyle(1).beginStroke(loaderColor).drawRect(-padding/2, -padding/2, loaderWidth+padding, barHeight+padding);
    loaderBar.x = canvas.width - loaderWidth>>1;
    loaderBar.y = canvas.height - barHeight>>1; 
	loaderBar.addChild(bar, bgBar);
    stage.addChild(loaderBar);
    ////////////////////////////////////////////////////////////////////

	var manifest = [
		{src:"../media/bob.mp3|media/bob.ogg", id:'audio_bob'},
		{src:"../media/ok.mp3|media/ok.ogg", id:'audio_ok'},
		{src:"../assets/images/_00jurel.png", id:"_00jurel"},
		{src:"../assets/images/_01caballa.png", id:"_01caballa"},
		{src:"../assets/images/_02merluza.png", id:"_02merluza"},
		{src:"../assets/images/_03sardina.png", id:"_03sardina"},
		{src:"../assets/images/_04boqueron.png", id:"_04boqueron"},
		{src:"../assets/images/_05rabil.png", id:"_05rabil"},
		{src:"../assets/images/_06pulpo.png", id:"_06pulpo"},
		{src:"../assets/images/_07rape.png", id:"_07rape"},
		{src:"../assets/images/_08pota.png", id:"_08pota"},
		{src:"../assets/images/_09chirla.png", id:"_09chirla"},
		{src:"../assets/images/_10almeja.png", id:"_10almeja"},
		{src:"../assets/images/_11pezespada.png", id:"_11pezespada"},
		{src:"../assets/images/_12gamba.png", id:"_12gamba"},
		{src:"../assets/images/_13cigala.png", id:"_13cigala"},
		{src:"../assets/images/_14bonito.png", id:"_14bonito"},
		{src:"../assets/images/_15dorada.png", id:"_15dorada"},
		{src:"../assets/images/_16calamar.png", id:"_16calamar"},
		{src:"../assets/images/_17lubina.png", id:"_17lubina"},
		{src:"../assets/images/_18besugo.png", id:"_18besugo"},
		{src:"../assets/images/_19bacalao.png", id:"_19bacalao"},
		{src:"../assets/images/_20mejillon.png", id:"_20mejillon"},
		{src:"../assets/images/_21trucha.png", id:"_21trucha"},
		{src:"../assets/images/_22rodaballo.png", id:"_22rodaballo"},
		{src:"../assets/images/_23gallo.png", id:"_23gallo"},
		{src:"../assets/images/_24lenguado.png", id:"_24lenguado"},
		{src:"../assets/images/_25bacadilla.png", id:"_25bacadilla"},
		{src:"../assets/images/_26sepia.png", id:"_26sepia"},
		{src:"../assets/images/_27congrio.png", id:"_27congrio"},
		{src:"../assets/images/_28langostino.png", id:"_28langostino"},
		{src:"../assets/images/_29salmonete.png", id:"_29salmonete"},
		{src:"../assets/images/barraBkg.png", id:"barraBkg"},
		{src:"../assets/images/barraColor.png", id:"barraColor"},
		{src:"../assets/images/barraColor.png", id:"barraColorMask"},
		{src:"../assets/images/bkg.jpg", id:"bkg"},
		{src:"../assets/images/bkg_1.png", id:"bkg_1"},
		{src:"../assets/images/btnAudio.png", id:"btnAudio"},
		{src:"../assets/images/btnCerrar.png", id:"btnCerrar"},
		{src:"../assets/images/btnComoJugar.png", id:"btnComoJugar"},
		{src:"../assets/images/btnJugar.png", id:"btnJugar"},
		{src:"../assets/images/burbuja.png", id:"burbuja"},
		{src:"../assets/images/logo.png", id:"logo"},
		{src:"../assets/images/popupBig.png", id:"popupBigBkg"},
		{src:"../assets/images/popupBkg.png", id:"popupBkg"},
		{src:"../assets/images/popupBkg2.png", id:"popupBkg2"},
		{src:"../assets/images/sombra.png", id:"sombra"}
	];

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress", handleProgress);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest);
}


timeout = function(){
	main.a01.tiempo.barra.barraColorMask.scaleX += avanceBarra;
	if(main.a01.tiempo.barra.barraColorMask.scaleX >= 1){ 
		main.popupTiempo.visible = true;
		clearInterval(timeoutId);
	}
}

function handleFileLoad(e) {
	if (e.item.type == "image") { images[e.item.id] = e.result; }
}


function handleProgress(e) {
    bar.scaleX = e.loaded * loaderWidth;
    stage.update();

}

function handleComplete() {
	main = new lib.main();
	stage.addChild(main);

    loaderBar.visible = false;
	main.a01.visible = false;

	doBtnAlpha(main.a00.btnJugar);
	doBtnAlpha(main.a00.btnComo);

	main.a00.btnJugar.addEventListener('click', onJugar);
	main.a00.btnComo.addEventListener('click', function(e){
		main.popupComoJugar.visible = true;
	});

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);

    stage.update();

	main.a01.btnAudio.addEventListener('click', function(e){
		if(volume==0){
			e.target.pulsado = false;
			volume = 1;
		}else{
			e.target.pulsado = true;
			volume = 0;
		}
	});

	main.a01.btnCerrar.addEventListener('click', function(e){
		reset();
	});

	main.popupComoJugar.addEventListener('click', function(e){
		e.target.visible = false;
	});
	main.popupTiempo.addEventListener('click', function(e){
		goNivel(nivel);
		e.target.visible = false;
	});
	main.popupEnhorabuena.addEventListener('click', function(e){
		goNivel(0);
		e.target.visible = false;
	});


	function onJugar(e){

		playSound('audio_bob');

		main.a00.visible = false;
		main.a01.visible = true;

		goNivel(0);

	}

	window.reset = function(){
		main.a00.visible=true;
		main.a01.visible=false;
	}

	window.goNivel = function(num){
		var elegidos = [];
		var elegidosVeces = [];
		var casillas = [];
		var randomNumber;

		nivel = num;

		avanceBarra = 1 / ((nivel+3) * 60);

		console.log(avanceBarra);

		if(num == 3){
			main.popupEnhorabuena.visible = true;
			console.log("goNivel 3");
		}else{

			main.a01.tiempo.txt.text = main.a01.tiempo.txtSombra.text = "Completa el reto antes de " + (num+3) + " minutos";

			main.a01.tiempo.barra.barraColorMask.scaleX = 0.01;
			if(typeof timeoutId != 'undefined') clearInterval(timeoutId);
			timeoutId = setInterval(timeout, 1000);

			main.a01.grid_0.visible=false;
			main.a01.grid_1.visible=false;
			main.a01.grid_2.visible=false;

			main.a01.nivel.txt.text = nivel + 1;
			casillasCompletadas = 0;

			grid = main.a01['grid_'+nivel];
			grid.visible = true;

			//SACO LOS PECES ALEATORIOS
			i=0;
			while(i<grid.children.length/2){

				randomNumber = 1 + Math.floor(Math.random()*grid.children.length);
				if( elegidos.indexOf(randomNumber) == -1 ){
					elegidos[i] = randomNumber;
					elegidosVeces[i] = 0;
					i++;
				}

			}

			//RELLENO LAS CASILLAS CON LOS PECES
			i=0;
			while(i<grid.children.length){
				grid.children[i].gotoAndStop(0);

				randomNumber = Math.floor(Math.random()*grid.children.length/2);
				if(elegidosVeces[randomNumber] < 2){
					elegidosVeces[randomNumber] ++;
					pezElegido = elegidos[randomNumber];
					grid.children[i].pezElegido = pezElegido;
					i++;
				}
			}
		}
	}

   window.playSound = function(id) {
        //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
        var instance = createjs.Sound.play(id, createjs.Sound.INTERRUPT_NONE, 0, 0, false, volume);
        if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) { return; }
		instance.addEventListener ("complete", function(instance) {
		});
	}	
}