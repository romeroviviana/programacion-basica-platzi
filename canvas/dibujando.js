var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("purple", 0, 0, 300, 300 );

function dibujarLinea(color, xinicial, xfinal, yinicial, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, xfinal);
	lienzo.lineTo(yinicial, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}