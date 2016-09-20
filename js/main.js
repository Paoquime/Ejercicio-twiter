window.addEventListener("load", function() {
	var boton = document.getElementById("go");
	boton.disabled = true;
	var boxText = document.getElementById("box-text");

	boton.addEventListener("click", function(e){

		e.preventDefault();
		var valor = boxText.value;
			agregarText(valor);
			boxText.value = "";
		boton.disabled = true;
    });

	function agregarText(valor) {
		var div = document.createElement("div");
			div.innerText = valor;
			div.classList.add("textConten");
		var contenedor = document.getElementById("contenedor");
			contenedor.insertBefore(div, contenedor.childNodes[0]);
	}

	boxText.addEventListener("keydown", function(){
		boton.disabled = false;
	}); 
});

