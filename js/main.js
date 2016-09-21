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

	boxText.addEventListener("keyup", function(){
		cantidadCaracteres(boxText);
	});

	function agregarText(valor) {
		var div = document.createElement("div");
			div.innerText = valor;
			div.classList.add("textConten");

		var contenedor = document.getElementById("contenedor");
			contenedor.insertBefore(div, contenedor.childNodes[0]);
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
});

