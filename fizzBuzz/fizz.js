for(i=1; i<=100; i++){
	if (divisible(i, 3)) {
		escribir("Fizz");
	}
	if (divisible(i, 5)) {
		escribir("Buzz");
	}
	if(!divisible(i, 3) && !divisible(i, 5)){		
	escribir(i);
	}
	escribir("<br>");
}

function divisible(dividendo, divisor) {
	if (dividendo % divisor == 0) {
		return true;
	}
	else{
		return false;
	}
	
}

function escribir(texto){
	document.write(texto);
}