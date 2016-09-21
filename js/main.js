window.addEventListener("load", function() {
	var boton = document.getElementById("go");
	var boxText = document.getElementById("box-text");
	var contador = document.getElementById("contador");


	boton.addEventListener("click", function(e){
		e.preventDefault();

		var valor = boxText.value;
		agregarText(valor);
		boxText.value = "";
		boton.disabled = true;
		contador.innerText = "140";
		contador.style.color = "black";
    });

	boxText.addEventListener("keyup", function(e){
		var tecla = e.keyCode;
		cantidadCaracteres(boxText);
		enterEspacio(tecla);
		creceText(boxText);
	});

	function agregarText(valor) {
		var div = document.createElement("div");
			div.innerText = valor;
			div.classList.add("textConten");

		var contenedor = document.getElementById("contenedor");
			contenedor.insertBefore(div, contenedor.childNodes[0]);

		var fecha = new Date();
		var hora = fecha.getHours();
		var min = fecha.getMinutes();
		var almacenaHora = document.createElement("div");
		almacenaHora.innerText = hora + ":" + min;
		div.insertBefore(almacenaHora,div.childNodes[0]);
	}

	function cantidadCaracteres(text){
		var caracteres = text.value.length;
			contador.innerText = 140 - caracteres;
			
		if (caracteres > 140 || caracteres == 0){
			boton.disabled = true;
		}else{
			boton.disabled = false;
		}

		if (caracteres > 120){
			contador.classList.add("yellow");
		}else{
			contador.classList.remove("yellow");
		}

		if (caracteres > 130){
			contador.classList.add("red");
		}else{
			contador.classList.remove("red");
		}


		if (caracteres > 140){
			contador.classList.add("orange");
		}else{
			contador.classList.remove("orange");
		}
	}

	function enterEspacio (tecla){
		if (tecla == 13) {
			boxText.rows ++;
		}else if (tecla == 8) {
			boxText.rows --;
		} 
		if (boxText.rows < 3){
			boxText.rows = 2; 
		}
	}

	function creceText (boxText){
		var caracteres = boxText.value.length;
		if (caracteres > boxText.rows * boxText.cols){
			boxText.rows ++;
		}
	}
});

