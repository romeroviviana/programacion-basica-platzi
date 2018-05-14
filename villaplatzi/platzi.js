var vp = document.getElementById('villaplatzi');
var papel = vp.getContext("2d");

var fondo = {
	url: "tile.png",
	cargarOk: false,
}
var vaca = {
	url: "vaca.png",
	cargarOk: false
}
var pollo = {
	url: "pollo.png",
	cargarOk: false
}
var cerdo = {
	url: "cerdo.png",
	cargarOk: false
}
var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

var x= 150;
var y= 150;

var numVaca = aleatorio(1, 15);
var numPollo = aleatorio(1, 15);
console.log(numVaca);
console.log(numPollo);

fondo.image = new Image();
fondo.image.src = fondo.url;
fondo.image.addEventListener("load", cargarFondo);

vaca.image = new Image();
vaca.image.src = vaca.url;
vaca.image.addEventListener("load", cargarVaca);

pollo.image = new Image();
pollo.image.src = pollo.url;
pollo.image.addEventListener("load", cargarPollo);

cerdo.image = new Image();
cerdo.image.src = cerdo.url;
cerdo.image.addEventListener("load", cargarCerdo);


function cargarFondo() {
	fondo.cargarOk = true;
	dibujar();
}
function cargarVaca(){
	vaca.cargarOk = true;
	dibujar();
}
function cargarPollo(){
	pollo.cargarOk = true;
	dibujar();
}
function cargarCerdo(){
	cerdo.cargarOk = true;
	dibujar();
}

function dibujar() {
	if (fondo.cargarOk) {
		papel.drawImage(fondo.image, 0, 0);
	}
	if (vaca.cargarOk) {
		for(v=0; v< numVaca; v++){
			var x = aleatorio(0, 20) * 21;
			var y = aleatorio(0, 20) * 21;
			papel.drawImage(vaca.image, x, y);
		}		
	}
	if (pollo.cargarOk) {
		for(v=0; v< numPollo; v++){
			var x = aleatorio(0, 20) * 21;
			var y = aleatorio(0, 20) * 21;
			papel.drawImage(pollo.image, x, y);
		}		
	}
	if (cerdo.cargarOk) {
		x = 150;
		y = 150;
		papel.drawImage(cerdo.image, x, y);
		
	}
	
}

function moverCerdo( xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
	var x = aleatorio(0, 20) * 21;
	var y = aleatorio(0, 20) * 21;
	papel.drawImage(cerdo.image, x, y);
}
document.addEventListener("keyup", dibujarTeclado);
function dibujarTeclado(evento) {
	var ancho = 10;
	switch(evento.keyCode){
		case teclas.LEFT:
			papel.drawImage(cerdo.image, x - ancho, y);
			x = x - ancho;
			console.log("ey");
		break;
		case teclas.UP:
			papel.drawImage(cerdo.image, x, y - ancho);
			y = y - ancho;
		break;
		case teclas.RIGHT:
			papel.drawImage(cerdo.image, x + ancho, y);
			x = x + ancho;
		break;
		case teclas.DOWN:
			papel.drawImage(cerdo.image, x, y + ancho);
			y= y + ancho;
		break;	
		default:
			console.log("what ever");
	}
}

function aleatorio(min, max) {
	var resultado;
	resultado = Math.floor(Math.random() * (max - min + 1) + min);
	return resultado;
}