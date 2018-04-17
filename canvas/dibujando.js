var d = document.getElementById("dibujito");
var texto = document.getElementById("texto_linea");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
ancho = d.width;

var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, xfinal, yinicial, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, xfinal);
	lienzo.lineTo(yinicial, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){
	var l = 0;
	lineas = parseInt(texto.value);
	espacio = ancho / lineas;
	var a, b;
	var colorLinea1 = "purple";

	for(l=0; l < lineas; l++){
		a = espacio * l;
		b = espacio * (l+1);
		dibujarLinea(colorLinea1, 0, a, b, ancho );	
	}
	dibujarLinea(colorLinea1, 1, 1, 1, ancho-1);
	dibujarLinea(colorLinea1, 1, ancho-1, ancho-1, ancho-1);
}
dibujarLinea("red", 100, 200, 150, 250);