document.addEventListener("keyup", dibujarConTeclas);

teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

function dibujarConTeclas(evento) {	
	switch(evento.keyCode){
		case teclas.LEFT:
			console.log("izquierda");
		break;
		case teclas.UP:
			console.log("arriba");
		break;
		case teclas.RIGHT:
			console.log("derecha");
		break;
		case teclas.DOWN:
			console.log("abajo");
		break;		
		default:
			console.log("what ever");
	}
}