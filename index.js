const copia = document.querySelector(".copiar");
copia.style.display = "none";
const mensaje = document.querySelector(".mensaje");
const muñeco = document.querySelector(".muñeco");
mensaje.style.display = "none";
function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if(texto.length !=0){
        mensaje.value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        mensaje.style.display = "flex";
        muñeco.style.display = "none";
        copia.style.display = "flex";
        texto.value= "";
    }else{
        alert("Debes ingresar algún texto");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
    }
}

function desencriptar(){
    let texto =document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if(texto.length !=0){
        mensaje.value = textoCifrado;
        mensaje.style.display = "flex";
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        texto.value= "";
        muñeco.style.display = "none";
    }else{
        alert("Debes ingresar algún texto");
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent ="Ingresa el texto que deseas encriptar o desencriptar";
    }
  
}
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
