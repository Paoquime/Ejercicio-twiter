window.addEventListener("load", function() {
	var boton = document.getElementById("enviar");
	boton.addEventListener("click", function() {
		var boxText = document.getElementById("box-text").value;
		var texto = document.createElement("p");
			texto.innerText = boxText;
		var contenedor = document.getElementById("contenedor");
			contenedor.insertBefore(texto, contenedor.childNodes[0]);
});
  });