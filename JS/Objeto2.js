/**
*Creo una función que se encargará de mostrar 
*el array a calcular por pantalla.
**/
function mostrarArray(){

var arit = [12,8,17,16,8,19,20];	

document.write("El array es el siguiente: [ ");

for (i = 0; i < arit.length; i++){ 

	document.write(arit[i] + " "); 

}

document.write("] <br>");

}


/*Y ahora creo función que mostarará la media
aritmética por pantalla.*/
function mostrarAritmetica(){

var aritmetica=[
	{valores: 12},
	{valores: 8},
	{valores: 17},
	{valores: 16},
	{valores: 8},
	{valores: 19},
	{valores: 20}
];

var elementos=aritmetica.length;

var total_aritmetica=aritmetica.reduce((total, item)=>{

	return total+item.valores/elementos;

}, 0);

document.write("El total de la aritmetica es: "+total_aritmetica);

}

mostrarArray();
mostrarAritmetica();