
var desplazamiento;

function encrip(id) {

    var scroll = false;
    var campo = document.getElementById("noEncontrado");
    var contenedor = document.getElementById("contenedorMensaje");
    var texto = document.getElementById("input").value;

    document.getElementById("input").value = "";

    campo.style.top = "0px";
    clearInterval(scroll);

    if (id == 1) {

        var encriptar = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    } if (id == 0) {

        var encriptar = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    }

    if (texto.trim() != "") {

        noError();
        campo.style.top = "0px";
        campo.innerHTML = encriptar;
        campo.style.textAlign = "left"; //center

        if (contenedor.scrollHeight > contenedor.offsetHeight && !scroll) {

            scroll = true;
            var distancia = contenedor.scrollHeight + contenedor.offsetHeight / 15;
            var i = 0;
            desplazamiento = setInterval(function () {

                campo.style.top = i + "px";
                i = i - 0.5;

                if (-i > distancia) {

                    i = contenedor.offsetHeight;
                }
            }, 30);
        }
    } else {

        campo.innerHTML = "No se ha encontrado ningún mensaje aún";
        campo.style.textAlign = "center";
        error();
    }
}

function copy() {

    var texto = document.getElementById("noEncontrado").innerHTML;
    navigator.clipboard.writeText(texto);
}

function noError() {

    var errorIMG = document.getElementById("notF");
	var botonCopiar = document.getElementById("copy");
    var posicion = document.getElementById("noEncontrado");
	errorIMG.style.display = "none";
	errorIMG.style.marginTop = "80px";
	botonCopiar.style.display = "block";
    posicion.style.marginTop = "10px";
    posicion.style.fontSize = "30px";
}

function error(){

    var errorIMG = document.getElementById("notF");
	var botonCopiar = document.getElementById("copy");
	errorIMG.style.display = "block";
	error.style.display = "block";
	botonCopiar.style.display = "block";
}

