(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.main = function() {
	this.initialize();

	this.popupComoJugar = new lib.popupComoJugar();

	this.popupTiempo = new lib.popupTiempo();

	this.popupEnhorabuena = new lib.popupEnhorabuena();
	//this.popupComoJugar.setTransform(726,436,1,1,0,0,0,0,0);

	// a00_home
	this.a00 = new lib.a00();

	// a01_jugar
	this.a01 = new lib.a01();
	this.a01.visible=false;

	// bkg
	this.bkg = new lib.bkg_2();

	this.addChild(this.bkg, this.a01, this.a00, this.popupComoJugar, this.popupTiempo, this.popupEnhorabuena, this.cargando);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726,475);


// symbols:
(lib._00jurel = function() {
	this.initialize(img._00jurel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._01caballa = function() {
	this.initialize(img._01caballa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._02merluza = function() {
	this.initialize(img._02merluza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._03sardina = function() {
	this.initialize(img._03sardina);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._04boqueron = function() {
	this.initialize(img._04boqueron);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._05rabil = function() {
	this.initialize(img._05rabil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._06pulpo = function() {
	this.initialize(img._06pulpo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._07rape = function() {
	this.initialize(img._07rape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._08pota = function() {
	this.initialize(img._08pota);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._09chirla = function() {
	this.initialize(img._09chirla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._10almeja = function() {
	this.initialize(img._10almeja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._11pezespada = function() {
	this.initialize(img._11pezespada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._12gamba = function() {
	this.initialize(img._12gamba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._13cigala = function() {
	this.initialize(img._13cigala);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._14bonito = function() {
	this.initialize(img._14bonito);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._15dorada = function() {
	this.initialize(img._15dorada);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._16calamar = function() {
	this.initialize(img._16calamar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._17lubina = function() {
	this.initialize(img._17lubina);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._18besugo = function() {
	this.initialize(img._18besugo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._19bacalao = function() {
	this.initialize(img._19bacalao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._20mejillon = function() {
	this.initialize(img._20mejillon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._21trucha = function() {
	this.initialize(img._21trucha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._22rodaballo = function() {
	this.initialize(img._22rodaballo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._23gallo = function() {
	this.initialize(img._23gallo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._24lenguado = function() {
	this.initialize(img._24lenguado);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._25bacadilla = function() {
	this.initialize(img._25bacadilla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._26sepia = function() {
	this.initialize(img._26sepia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._27congrio = function() {
	this.initialize(img._27congrio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._28langostino = function() {
	this.initialize(img._28langostino);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib._29salmonete = function() {
	this.initialize(img._29salmonete);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.barraBkg = function() {
	this.initialize(img.barraBkg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,18);


(lib.barraColor = function() {
	this.initialize(img.barraColor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,14);


(lib.bkg = function() {
	this.initialize(img.bkg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,726,436);


(lib.bkg_1 = function() {
	this.initialize(img.bkg_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,91);


(lib.btnAudio = function() {
	this.initialize(img.btnAudio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,29);


(lib.btnCerrar = function() {
	this.initialize(img.btnCerrar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,29);


(lib.btnComoJugar = function() {
	this.initialize(img.btnComoJugar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,31);


(lib.btnJugar = function() {
	this.initialize(img.btnJugar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,51);


(lib.burbuja = function() {
	this.initialize(img.burbuja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,63);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,135);
	

(lib.popupBkg = function() {
	this.initialize(img.popupBkg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,160);


(lib.popupBkg2 = function() {
	this.initialize(img.popupBkg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,160);


(lib.sombra = function() {
	this.initialize(img.sombra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,726,317);

(lib.popupBigBkg = function() {
	this.initialize(img.popupBigBkg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,726,436);

(lib.popupComoJugar = function() {
	this.initialize();
	this.visible = false;

	this.tit = new cjs.Text("Cómo jugar", "50px peraltaregular", "#17457c");
	this.txt = new cjs.Text("Hay un máximo de 30 burbujas, y en ellas hay escondidos 30 tipos de peces diferentes. Tienes que explotar las burbujas de 2 en 2 buscando las parejas de peces que sean iguales.\n\nDate prisa, dispones de escasos minutos por nivel.", "bold 17px Arial", "#17457c");
	//this.txt.textAlign = "center";
	//this.txt.lineHeight = 14;
	this.txt.lineWidth = 540;
	this.txt.setTransform(90,190,1,1);

	this.tit.lineWidth = 540;
	this.tit.setTransform(90,90,1,1);
	// bkg
	this.bkg = new lib.popupBigBkg();
	//this.instance.setTransform(-206.9,-211.9);

	this.addChild(this.bkg, this.txt, this.tit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726,436);

(lib.popupTiempo = function() {
	this.initialize();
	this.visible = false;

	this.tit = new cjs.Text("¡Tiempo!", "50px peraltaregular", "#17457c");
	this.txt = new cjs.Text("¡Ooops!\n\n¡Se nos ha acabado el tiempo!\n\nPero no te preocupes, puedes volver a intentarlo con un clic\n", "bold 17px Arial", "#17457c");
	this.txt.textAlign = "center";
	//this.txt.lineHeight = 14;
	this.txt.lineWidth = 600;
	this.txt.setTransform(360,190,1,1);

	this.tit.lineWidth = 600;
	this.tit.setTransform(90,90,1,1);
	// bkg
	this.bkg = new lib.popupBigBkg();
	//this.instance.setTransform(-206.9,-211.9);

	this.addChild(this.bkg, this.txt, this.tit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726,436);

(lib.popupEnhorabuena = function() {
	this.initialize();
	this.visible = false;

	this.tit = new cjs.Text("¡Reto conseguido!", "50px peraltaregular", "#17457c");
	this.txt = new cjs.Text("Has conseguido pasar todos los niveles.\n\nPuedes hacer clic para volver a jugar y descubrir nuevas burbujas.\n\n¡Hay 30 parejas diferentes escondidas bajo ellas!", "bold 17px Arial", "#17457c");
	this.txt.textAlign = "center";
	//this.txt.lineHeight = 14;
	this.txt.lineWidth = 600;
	this.txt.setTransform(360,190,1,1);

	this.tit.lineWidth = 600;
	this.tit.setTransform(90,90,1,1);
	// bkg
	this.bkg = new lib.popupBigBkg();
	//this.instance.setTransform(-206.9,-211.9);

	this.addChild(this.bkg, this.txt, this.tit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726,436);



(lib.casilla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.stop();
	doBtnAlpha(this);
	this.addEventListener('click', function(e){

		if(bloqueado == false && e.target.currentFrame == 0){
			casillasAbiertas++;

			main.a01.popup.visible=true;
			main.a01.popup.x = e.target.x + 120;
			main.a01.popup.y = e.target.y + 185;

			if(main.a01.popup.x <= 290){
				//console.log(main.a01.popup.bkg.x);
				main.a01.popup.txt.setTransform(50,-192,1,1);
				main.a01.popup.bkg.setTransform(207,-212);
				main.a01.popup.bkg.scaleX = -1;
			}else{
				main.a01.popup.txt.setTransform(-73,-192,1,1);
				main.a01.popup.bkg.setTransform(-207,-212);
				main.a01.popup.bkg.scaleX = 1;
			}

			t = 1000;

			switch(casillasAbiertas){ 
				case 1:
					playSound('audio_bob');
					casillaAbiertaA = e.target;
					main.a01.popup.txt.text = textosPeces[casillaAbiertaA.pezElegido-1];
					break;
				case 2:

					bloqueado = true;

					casillaAbiertaB = e.target;
					main.a01.popup.txt.text = textosPeces[casillaAbiertaB.pezElegido-1];

					if(casillaAbiertaA.pezElegido == casillaAbiertaB.pezElegido){
						t = 3000;
						main.a01.popup.txt.text = textosPeces2[casillaAbiertaB.pezElegido-1];
						
						playSound('audio_ok');
						casillasCompletadas++;
						console.log("casillas completadas: " + casillasCompletadas);
					}else{

						playSound('audio_bob');
					}
					break;

			}
			if(typeof timePopupOut != 'undefined') clearTimeout(timePopupOut);

			timePopupOut = setTimeout(function(){ 
				bloqueado = false;
				main.a01.popup.visible = false;

				console.log(casillasAbiertas);

				if(casillasAbiertas == 2){
					if(casillaAbiertaA.pezElegido != casillaAbiertaB.pezElegido){
						casillaAbiertaA.gotoAndStop(0);
						casillaAbiertaB.gotoAndStop(0);
					}
					casillasAbiertas = 0;
				}
				if(casillasCompletadas == e.target.parent.children.length/2){
					goNivel( ++nivel );
				}
			}, t);
			e.target.alpha=1;
			e.target.gotoAndStop(e.target.pezElegido);
		}
	});

	// pez
	this.instance = new lib._00jurel();
	this.instance.setTransform(-35.9,-35.9);

	this.instance_1 = new lib._01caballa();
	this.instance_1.setTransform(-35.9,-35.9);

	this.instance_2 = new lib._02merluza();
	this.instance_2.setTransform(-35.9,-35.9);

	this.instance_3 = new lib._03sardina();
	this.instance_3.setTransform(-35.9,-35.9);

	this.instance_4 = new lib._04boqueron();
	this.instance_4.setTransform(-35.9,-35.9);

	this.instance_5 = new lib._05rabil();
	this.instance_5.setTransform(-35.9,-35.9);

	this.instance_6 = new lib._06pulpo();
	this.instance_6.setTransform(-35.9,-35.9);

	this.instance_7 = new lib._07rape();
	this.instance_7.setTransform(-35.9,-35.9);

	this.instance_8 = new lib._08pota();
	this.instance_8.setTransform(-35.9,-35.9);

	this.instance_9 = new lib._09chirla();
	this.instance_9.setTransform(-35.9,-35.9);

	this.instance_10 = new lib._10almeja();
	this.instance_10.setTransform(-35.9,-35.9);

	this.instance_11 = new lib._11pezespada();
	this.instance_11.setTransform(-35.9,-35.9);

	this.instance_12 = new lib._12gamba();
	this.instance_12.setTransform(-35.9,-35.9);

	this.instance_13 = new lib._13cigala();
	this.instance_13.setTransform(-35.9,-35.9);

	this.instance_14 = new lib._14bonito();
	this.instance_14.setTransform(-35.9,-35.9);

	this.instance_15 = new lib._15dorada();
	this.instance_15.setTransform(-35.9,-35.9);

	this.instance_16 = new lib._16calamar();
	this.instance_16.setTransform(-35.9,-35.9);

	this.instance_17 = new lib._17lubina();
	this.instance_17.setTransform(-35.9,-35.9);

	this.instance_18 = new lib._18besugo();
	this.instance_18.setTransform(-35.9,-35.9);

	this.instance_19 = new lib._19bacalao();
	this.instance_19.setTransform(-35.9,-35.9);

	this.instance_20 = new lib._20mejillon();
	this.instance_20.setTransform(-35.9,-35.9);

	this.instance_21 = new lib._21trucha();
	this.instance_21.setTransform(-35.9,-35.9);

	this.instance_22 = new lib._22rodaballo();
	this.instance_22.setTransform(-35.9,-35.9);

	this.instance_23 = new lib._23gallo();
	this.instance_23.setTransform(-35.9,-35.9);

	this.instance_24 = new lib._24lenguado();
	this.instance_24.setTransform(-35.9,-35.9);

	this.instance_25 = new lib._25bacadilla();
	this.instance_25.setTransform(-35.9,-35.9);

	this.instance_26 = new lib._26sepia();
	this.instance_26.setTransform(-35.9,-35.9);

	this.instance_27 = new lib._27congrio();
	this.instance_27.setTransform(-35.9,-35.9);

	this.instance_28 = new lib._28langostino();
	this.instance_28.setTransform(-35.9,-35.9);

	this.instance_29 = new lib._29salmonete();
	this.instance_29.setTransform(-35.9,-35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

	// azul
	this.instance_30 = new lib.burbuja();
	this.instance_30.setTransform(-31.9,-31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30}]}).to({state:[]},1).wait(30));

	// bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkEEFQhshsAAiZQAAiYBshsQBshsCYAAQCZAABsBsQBtBsgBCYQABCZhtBsQhsBtiZgBQiYABhshtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-36.9,74,74);


(lib.burbuja_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.burbuja();
	this.instance.setTransform(-31.9,-31.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.9,-31.4,64,63);

(lib.barra = function() {
	this.initialize();

	// Capa 1
	this.barraColor = new lib.barraColor();
	this.barraColor.setTransform(2.5,0,1.123,1);
	this.addChild(this.barraColor);

	this.barraColorMask = new createjs.Shape();
	this.barraColorMask.graphics.beginFill("#ff0000").drawRect(0, 0, 303, 14);
//	this.barraColorMask.scaleX = 0.01;
//cjs.Rectangle(0,0,268,14);

//	this.addChild(this.barraColorMask);

	this.barraColor.mask = this.barraColorMask;

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,0,301,14);


(lib.sombra_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.sombra();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726,317);


(lib.popup = function() {
	this.initialize();


	console.log(this);
	this.visible = false;

	// txt
	this.txt = new cjs.Text("XXX", "bold 12px Arial", "#226BB9");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 12;
	this.txt.lineWidth = 192;
	this.txt.setTransform(-73,-192,1.083,1.081);

	// bkg
	this.bkg = new lib.popupBkg();
	this.bkg.setTransform(-207,-212);

	this.addChild(this.bkg,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206.9,-211.9,266,235);


(lib.nivel = function() {
	this.initialize();

	//nivel
	this.tit = new cjs.Text("NIVEL", "10px peraltaregular", "#62CFDA");
	this.tit.textAlign = "center";
	this.tit.lineHeight = 11;
	this.tit.setTransform(278,0,2,2);


	// txt
	this.txt = new cjs.Text("1", "24px peraltaregular", "#62CFDA");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 11;
	this.txt.setTransform(278,20,1.819,1.774);

	// bkg
	this.bkg = new lib.bkg_1();
	this.bkg.setTransform(232,0);
	this.bkg.scaleX = 1.2;

	this.addChild(this.bkg, this.txt, this.tit);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(232,0,73,91);


(lib.btnCerrar_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.btnCerrar();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,29);


(lib.btnAudio_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.btnAudio();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,29);


(lib.logo_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.logo();
	this.instance.setTransform(-161.4,-67.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.4,-67.4,323,135);


(lib.btnJugar_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.btnJugar();
	this.instance.setTransform(-66.9,-25.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.9,-25.4,134,51);


(lib.btnComo = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.btnComoJugar();
	this.instance.setTransform(-66.9,-15.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.9,-15.4,134,31);


(lib.grid_2 = function() {
	this.initialize();
	this.visible = false;

	// Capa 1
	this.c29 = new lib.casilla();
	this.c29.setTransform(570,380);

	this.c28 = new lib.casilla();
	this.c28.setTransform(490,380);

	this.c27 = new lib.casilla();
	this.c27.setTransform(410,380);

	this.c26 = new lib.casilla();
	this.c26.setTransform(330,380);

	this.c25 = new lib.casilla();
	this.c25.setTransform(250,380);

	this.c24 = new lib.casilla();
	this.c24.setTransform(170,380);

	this.c23 = new lib.casilla();
	this.c23.setTransform(650,300);

	this.c22 = new lib.casilla();
	this.c22.setTransform(570,300);

	this.c21 = new lib.casilla();
	this.c21.setTransform(490,300);

	this.c20 = new lib.casilla();
	this.c20.setTransform(410,300);

	this.c19 = new lib.casilla();
	this.c19.setTransform(330,300);

	this.c18 = new lib.casilla();
	this.c18.setTransform(250,300);

	this.c17 = new lib.casilla();
	this.c17.setTransform(170,300);

	this.c16 = new lib.casilla();
	this.c16.setTransform(90,300);

	this.c15 = new lib.casilla();
	this.c15.setTransform(650,220);

	this.c14 = new lib.casilla();
	this.c14.setTransform(570,220);

	this.c13 = new lib.casilla();
	this.c13.setTransform(490,220);

	this.c12 = new lib.casilla();
	this.c12.setTransform(410,220);

	this.c11 = new lib.casilla();
	this.c11.setTransform(330,220);

	this.c10 = new lib.casilla();
	this.c10.setTransform(250,220);

	this.c09 = new lib.casilla();
	this.c09.setTransform(170,220);

	this.c08 = new lib.casilla();
	this.c08.setTransform(90,220);

	this.c07 = new lib.casilla();
	this.c07.setTransform(650,140);

	this.c06 = new lib.casilla();
	this.c06.setTransform(570,140);

	this.c05 = new lib.casilla();
	this.c05.setTransform(490,140);

	this.c04 = new lib.casilla();
	this.c04.setTransform(410,140);

	this.c03 = new lib.casilla();
	this.c03.setTransform(330,140);

	this.c02 = new lib.casilla();
	this.c02.setTransform(250,140);

	this.c01 = new lib.casilla();
	this.c01.setTransform(170,140);

	this.c00 = new lib.casilla();
	this.c00.setTransform(90,140);

	this.addChild(this.c00,this.c01,this.c02,this.c03,this.c04,this.c05,this.c06,this.c07,this.c08,this.c09,this.c10,this.c11,this.c12,this.c13,this.c14,this.c15,this.c16,this.c17,this.c18,this.c19,this.c20,this.c21,this.c22,this.c23,this.c24,this.c25,this.c26,this.c27,this.c28,this.c29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(53,103,634,314);


(lib.grid_1 = function() {
	this.initialize();
	this.visible = false;

	// Capa 1
	this.c19 = new lib.casilla();
	this.c19.setTransform(490,300);

	this.c18 = new lib.casilla();
	this.c18.setTransform(410,300);

	this.c17 = new lib.casilla();
	this.c17.setTransform(330,300);

	this.c16 = new lib.casilla();
	this.c16.setTransform(250,300);

	this.c15 = new lib.casilla();
	this.c15.setTransform(650,220);

	this.c14 = new lib.casilla();
	this.c14.setTransform(570,220);

	this.c13 = new lib.casilla();
	this.c13.setTransform(490,220);

	this.c12 = new lib.casilla();
	this.c12.setTransform(410,220);

	this.c11 = new lib.casilla();
	this.c11.setTransform(330,220);

	this.c10 = new lib.casilla();
	this.c10.setTransform(250,220);

	this.c09 = new lib.casilla();
	this.c09.setTransform(170,220);

	this.c08 = new lib.casilla();
	this.c08.setTransform(90,220);

	this.c07 = new lib.casilla();
	this.c07.setTransform(650,140);

	this.c06 = new lib.casilla();
	this.c06.setTransform(570,140);

	this.c05 = new lib.casilla();
	this.c05.setTransform(490,140);

	this.c04 = new lib.casilla();
	this.c04.setTransform(410,140);

	this.c03 = new lib.casilla();
	this.c03.setTransform(330,140);

	this.c02 = new lib.casilla();
	this.c02.setTransform(250,140);

	this.c01 = new lib.casilla();
	this.c01.setTransform(170,140);

	this.c00 = new lib.casilla();
	this.c00.setTransform(90,140);

	this.addChild(this.c00,this.c01,this.c02,this.c03,this.c04,this.c05,this.c06,this.c07,this.c08,this.c09,this.c10,this.c11,this.c12,this.c13,this.c14,this.c15,this.c16,this.c17,this.c18,this.c19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(53,103,634,234);


(lib.grid_0 = function() {
	this.initialize();

	// Capa 1
	this.c09 = new lib.casilla();
	this.c09.setTransform(520,270);

	this.c08 = new lib.casilla();
	this.c08.setTransform(440,270);

	this.c07 = new lib.casilla();
	this.c07.setTransform(360,270);

	this.c06 = new lib.casilla();
	this.c06.setTransform(280,270);

	this.c05 = new lib.casilla();
	this.c05.setTransform(200,270);

	this.c04 = new lib.casilla();
	this.c04.setTransform(520,190);

	this.c03 = new lib.casilla();
	this.c03.setTransform(440,190);

	this.c02 = new lib.casilla();
	this.c02.setTransform(360,190);

	this.c01 = new lib.casilla();
	this.c01.setTransform(280,190);

	this.c00 = new lib.casilla();
	this.c00.setTransform(200,190);

	this.addChild(this.c00,this.c01,this.c02,this.c03,this.c04,this.c05,this.c06,this.c07,this.c08,this.c09);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(163,153,394,154);


(lib.burbujaAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// burbuja
	this.b00 = new lib.burbuja_1();
	this.b00.setTransform(172.1,392.5);

	this.timeline.addTween(cjs.Tween.get(this.b00).to({guide:{path:[172,392.5,172.1,392.3,172.2,392.1,176.9,381.4,185,373,187.3,370.6,189.7,369.5,190.9,368.9,192,368.2,193.9,366.9,195.7,365.7,204.4,360,214.8,354.8,220.8,351.9,222.1,346,222.4,344.9,223.1,344.1,228.4,338,230.5,329.8,230.9,328.4,231.3,327,232,324.3,232.7,321.9,236.8,308.7,236,293.9,235.9,291.9,235.2,290.2,233.4,285.4,230.7,281,227.7,276.1,223.1,271.7,220.3,269.2,219.2,266.2,218.4,263.9,216.9,261.9,211,254.2,205.1,246.5,203.9,244.9,202.2,243.5,194.3,237.1,185.9,231.8,182.7,229.8,179.9,227.8,170.5,221.2,160,216.7,157.2,215.5,155,212.9,149.9,206.9,145.3,201.6,143.9,199.9,142.9,197.9,141.6,195.3,139.4,193.4,138.9,192.9,138.7,192,138.3,189.6,136.1,187.6,135.4,187,134.8,186,132.2,181.5,130.3,178.7,128.8,176.6,128.4,173,128.2,170.7,127.5,168.7,126.9,167,126.9,165,126.9,154,127.3,143,127.4,141.5,127.9,140,131.7,130.1,138.3,120.4,140.7,116.8,142.7,113.1,146.5,106.2,151.5,100.7,152.9,99.2,155,98.4,157.9,97.2,159.7,94.8,161.4,92.7,163.9,91.2,173.5,85.7,181.9,79.2,185.6,76.3,188.7,74.8,190.9,73.7,192.7,72,195.5,69.6,198.7,67.9,212.9,60.6,224.6,50.8,225.9,49.7,227.1,48.3,230.1,44.9,231.3,39.3,231.9,36.2,232.4,33.1,232.9,30.2,232.8,27.2,232.6,22.4,233.4,18.1,233.9,15.7,233.9,13.2,233.9,1.7,233.4,-9.7,233.4,-11.2,232.8,-12.7,229.5,-22,222.1,-28,219.3,-30.3,216.1,-32.1,213.4,-33.7,210.7,-35.4,194.7,-45.7,178.8,-56.6,174.9,-59.2,171.8,-61.6,160.2,-70.6,148.6,-79.4,146.9,-80.7,145,-82,135,-88.7,125.7,-94.5,118.1,-99.3,115.3,-106.4,114.6,-108.2,113.7,-110,113.1,-111.2,112.6,-112.5,112.1,-113.7,111.2,-114.8,109,-117.8,108.7,-121.7,108.6,-122.4,108.4,-123]}},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.5,590.5,64,63);


(lib.tiempo = function() {
	this.initialize();

	// barra
	this.barra = new lib.barra();
	this.barra.setTransform(4,30,1,1,0,0,0,1,6);

	// Capa 23
	this.instance = new lib.barraBkg();
	this.instance.setTransform(0,22);

	// Completa el reto en 2 min.
	this.txt = new cjs.Text("", "bold 9px Peralta", "#FFFFFF");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 3;
	this.txt.setTransform(156,-2, 2, 2, -0.4);

	this.txtSombra = new cjs.Text("", "bold 9px Peralta", "#17457c");
	this.txtSombra.textAlign = "center";
	this.txtSombra.lineHeight = 3;
	this.txtSombra.setTransform(156, -3, 2, 2,-0.4);

	this.addChild(this.txtSombra, this.instance, this.barra);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.1,312,44.2);


(lib.a01 = function() {
	this.initialize();

	// poup
	this.popup = new lib.popup();
	this.popup.setTransform(540,417.5,1,1,0,0,0,133,117.5);

	// nivel
	this.nivel = new lib.nivel();
	this.nivel.setTransform(152.5,55.4,1,1,0,0,0,152.5,55.4);

	// tiempo
	this.tiempo = new lib.tiempo();
	this.tiempo.setTransform(478,52.4,1,1,0,0,0,156,19.4);

	// btnAudio
	this.btnAudio = new lib.btnAudio_1();
	this.btnAudio.setTransform(666.5,35.5,1,1,0,0,0,14.5,14.5);
	doBtnAlpha(this.btnAudio);

	// btnCerrar
	this.btnCerrar = new lib.btnCerrar_1();
	this.btnCerrar.setTransform(698.5,36.5,1,1,0,0,0,15.5,14.5);
	doBtnAlpha(this.btnCerrar);

	// sombra
	this.sombra = new lib.sombra_1();
	this.sombra.setTransform(363,434.9,1,1,0,0,0,363,315.4);

	// grid_0
	this.grid_0 = new lib.grid_0();

	// grid_1
	this.grid_1 = new lib.grid_1();

	// grid_2
	this.grid_2 = new lib.grid_2();

	this.addChild(this.grid_2,this.grid_1,this.grid_0,this.sombra,this.btnCerrar,this.btnAudio,this.tiempo,this.nivel,this.popup);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726,436.5);


(lib.a00 = function() {
	this.initialize();

	// btnJugar
	this.btnJugar = new lib.btnJugar_1();
	this.btnJugar.setTransform(583,194.5);

	// btnComoJugar.png
	this.btnComo = new lib.btnComo();
	this.btnComo.setTransform(585,249.5);

	// logo.png
	this.logo = new lib.logo_1();
	this.logo.setTransform(307.5,201.5);

	this.addChild(this.logo,this.btnComo,this.btnJugar);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(146,134,506,135);


(lib.burbujas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b0
	this.b0 = new lib.burbujaAnim();
	this.b0.setTransform(477,52.1,1,1,0,0,0,-0.9,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.b0).to({_off:true},100).wait(498));

	// b1
	this.b0_1 = new lib.burbujaAnim();
	this.b0_1.setTransform(-94.9,52.1,1,1,0,0,0,-0.9,-0.4);
	this.b0_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b0_1).wait(199).to({_off:false},0).to({_off:true},99).wait(300));

	// b2
	this.b0_2 = new lib.burbujaAnim();
	this.b0_2.setTransform(207,264.3,0.5,0.5,0,0,0,-0.8,-0.4);
	this.b0_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b0_2).wait(344).to({_off:false},0).to({_off:true},99).wait(155));

	// b3
	this.b0_3 = new lib.burbujaAnim();
	this.b0_3.setTransform(422,339,0.3,0.3,0,0,0,-0.7,-0.4);
	this.b0_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b0_3).wait(298).to({_off:false},0).to({_off:true},99).wait(201));

	// b4
	this.b0_4 = new lib.burbujaAnim();
	this.b0_4.setTransform(117,110,0.4,0.4,0,0,0,-0.8,-0.4);
	this.b0_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b0_4).wait(239).to({_off:false},0).to({_off:true},99).wait(260));

	// b5
	this.b0_5 = new lib.burbujaAnim();
	this.b0_5.setTransform(492.9,221,0.2,0.2,0,0,0,-0.9,-0.4);
	this.b0_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b0_5).wait(1).wait(497).to({_off:false},0).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(618,413.5,64,63);


(lib.bkg_2 = function() {
	this.initialize();

	// burbujas
	this.burbujas = new lib.burbujas();
	this.burbujas.setTransform(-70.2,-182.1,1,1,0,0,0,-70.4,-180.7);

	// bkg
	this.instance = new lib.bkg();

	this.addChild(this.instance,this.burbujas);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726,475);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;