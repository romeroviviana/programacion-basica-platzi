var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var l = 0;
var lineas = 30;
var a, b;
var colorLinea1 = "purple";
var colorLinea2 = "gray";

do{
	a = 10 * l;
	b = 10 * (l+1);
	dibujarLinea(colorLinea1, 0, a, b, 300 );
	l++;
}
while(l < lineas);
dibujarLinea(colorLinea1, 1, 1, 1, 299);
dibujarLinea(colorLinea1, 1, 299, 299, 299);



for(l=0; l<lineas; l++){
	a = 10 * l;
	b = 300 - (a+10);
	dibujarLinea(colorLinea2, 300, a, b, 300 );
}
dibujarLinea(colorLinea2, 299, 1, 299, 299);

l = 0;
while(l < lineas){
	a = 10 * l;
	b = 10 * (l+1);
	dibujarLinea(colorLinea1, a, 0, 300, b);
	l++;
}

function dibujarLinea(color, xinicial, xfinal, yinicial, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, xfinal);
	lienzo.lineTo(yinicial, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}