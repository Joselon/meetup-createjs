
function doBtnAlpha(btn){
	if(typeof playSound != 'undefined')	playSound('audio_bob');
	btn.addEventListener('mouseover', onOverAlpha);
	btn.addEventListener('mouseout', onOutAlpha);
}

function onOverAlpha(e){
	e.target.cursor = 'pointer';
	if(!e.target.currentFrame>0)	e.target.alpha=0.5;
}
function onOutAlpha(e){
	if(typeof e.target.pulsado != "undefined"){
		if(e.target.pulsado == false){
			e.target.cursor = '';
			e.target.alpha=1;
		}
	}else{
		e.target.cursor = '';
		e.target.alpha=1;
	}
}
