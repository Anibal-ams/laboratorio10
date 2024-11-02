function mostrarvalores(){
	nombre = "Anibal";
	edad = 15;
	esEstudiante = true;
	document.write("Nombre: ",nombre, "<br>" );
	document.write("edad: ",edad, "<br>" );
	document.write("¿Es estudiante?: ",esEstudiante, "<br>" );

	nombre = "Anibal";
	edad = 15;
	esEstudiante = true;
	document.write("Nombre: ",nombre, "<br>" );
	document.write("Edad: ",edad, "<br>" );
	document.write("¿Es estudiante?: ",esEstudiante, "<br>" );

		
}

function operacionesMatematicas() {
	let a = 100;
	let b = 15;
	let suma = a + b;
	let resta = a - b;
	multiplicacion = a * b;
	division = a / b;
	igualdad = a == b;
	diferencia = a != b;
	mayorque = a > b;
	menorque = a < b;
	mayoroigual = a >= b;
	menoroigual = a <= b;


	document.write("<b>los numeros ingresados son:  </b>" + a + "<b> y </b>" + b);
	document.write("<br>el resultado de la suma es:  " + suma);
	document.write("<br>el resultado de la resta es:  " + resta);
	document.write("<br>el resultado de la multiplicacion es:  " + multiplicacion);
	document.write("<br>el resultado de la division es:  " + division);
	document.write("<br>A = B: " + "<b>" + igualdad + "</b>");
	document.write("<br>A != B: " + "<b>" + diferencia + "</b>");
	document.write("<br>A > B: " + "<b>" + mayorque + "</b>");
	document.write("<br>A < B: " + "<b>" + menorque + "</b>");
	document.write("<br>A >= B: " + "<b>" + mayoroigual + "</b>");
	document.write("<br>A <= B: " + "<b>" + menoroigual + "</b>");

}

function verificarConduccion() {
	let esmayordeedad = true;
	let tienelicencia = true;

	document.write("La persona es mayor de edad: " + esmayordeedad + ", <br> y la persona tiene licencia: " + tienelicencia + "<br> entonces")

	if (esmayordeedad == true && tienelicencia == true) {
		document.write("<h3>Puede conducir</h3>");
	}
	else {
		document.write("<h3>No puede conducir </h3>");
	}
}