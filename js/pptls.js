/*  
	REGLAS de Piedra, papel, tijera, lagarto o Spock:
	“Las tijeras cortan el papel, el papel cubre a la piedra, la piedra aplasta al lagarto, 
	el lagarto envenena a Spock, Spock destroza las tijeras, las tijeras decapitan al lagarto, 
	lagarto se come el papel, el papel refuta a Spock, Spock vaporiza la piedra, 
	y, como es habitual… la piedra aplasta las tijeras.”
*/

function aleatorio (minimo, maximo) {
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;

function jugar(eleccion) {
	opcionUsuario = eleccion;
	var opcionMaquina = aleatorio(0,4);

    alert("Elegiste: " + opciones[opcionUsuario] + "\nLa Maquina JS Eligió: " + opciones[opcionMaquina]);

	if (opcionUsuario == piedra)
	{
		if (opcionMaquina == piedra) 
		{
			alert("Empate!");
		}
		else if (opcionMaquina == papel || opcionMaquina == spock)
		{
			alert("Perdiste :(");
		}
		else if (opcionMaquina == tijera || opcionMaquina == lagarto)
		{
			alert("Ganaste :)");
		}
	} else if (opcionUsuario == papel)
	{
		if (opcionMaquina == piedra || opcionMaquina == spock) 
		{
			alert("Ganaste :)");
		}
		else if (opcionMaquina == papel)
		{
			alert("Empate!");
		}
		else if (opcionMaquina == tijera || opcionMaquina == lagarto)
		{
			alert("Perdiste :(");
		}
	} else if (opcionUsuario == tijera)
	{
		if (opcionMaquina == piedra || opcionMaquina == spock) 
		{
			alert("Perdiste :(");
		}
		else if (opcionMaquina == papel || opcionMaquina == lagarto)
		{
			alert("Ganaste :)");
		}
		else if (opcionMaquina == tijera)
		{
			alert("Empate!");
		}
	} else if (opcionUsuario == lagarto)
	{
		if (opcionMaquina == piedra || opcionMaquina == tijera) 
		{
			alert("Perdiste :(");
		}
		else if (opcionMaquina == papel || opcionMaquina == spock)
		{
			alert("Ganaste :)");
		}
		else if (opcionMaquina == lagarto)
		{
			alert("Empate!");
		}
	}else if (opcionUsuario == spock)
	{
		if (opcionMaquina == piedra || opcionMaquina == tijera) 
		{
			alert("Ganaste :)");
		}
		else if (opcionMaquina == papel || opcionMaquina == lagarto)
		{
			alert("Perdiste :(");
		}
		else if (opcionMaquina == spock)
		{
			alert("Empate!");
		}
	}
}
