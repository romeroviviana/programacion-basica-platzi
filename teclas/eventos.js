var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

var estado;

document.addEventListener("mousedown", downMouse);
document.addEventListener("mouseup", upMouse);
document.addEventListener("mousemove", moveMouse);

function downMouse(evento){	
	x1 = evento.layerX;
	y2 = evento.layerY;
	console.log(x1);
	estado = 1;

}

function upMouse(evento){
	estado = 0;
}

function moveMouse(evento){

	if (estado == 1 ) {
		dibujarLinea("purple", x1, y2, evento.layerX, evento.layerY, papel);
		x1 = evento.layerX;
		y2= evento.layerY;
		//console.log(evento);	
	}
	
	
	
}


function dibujarMouse(){
	
	
	dibujarLinea("purple", x, y, x - ancho, y, papel);
}


document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("are_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento) {	
	var colorcito = "pink";
	var ancho = 10;
	switch(evento.keyCode){
		case teclas.LEFT:
			dibujarLinea(colorcito, x, y, x - ancho, y, papel);
			x = x - ancho;
		break;
		case teclas.UP:
			dibujarLinea(colorcito, x, y, x, y - ancho, papel);
			y = y - ancho;
		break;
		case teclas.RIGHT:
			dibujarLinea(colorcito, x, y, x + ancho, y, papel);
			x = x + ancho;
		break;
		case teclas.DOWN:
			dibujarLinea(colorcito, x, y, x, y + ancho, papel);
			y= y + ancho;
		break;		
		default:
			console.log("what ever");
	}
}







