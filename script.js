var pegar_texto = document.getElementById("texto");
var texto = pegar_texto.value.toLowerCase();
var pegar_final = document.querySelector("#textoFinal");
var textoFinal = pegar_final.value.toLowerCase();
var logoAlura = document.querySelector("#alura");
var logoOne = document.querySelector("#one");
var URL1 = "https://www.alura.com.br";
var URL2 = "https://www.oracle.com/br/education/oracle-next-education/";
var code = document.querySelector("#code");
var decode = document.querySelector("#decode");
var copy = document.querySelector("#copy");


function abrirAlura(URL1) {
  var win = window.open(URL1, '_blank');
  win.focus();
}

function abrirOne(URL2) {
  var win = window.open(URL2, '_blank');
  win.focus();
}

logoAlura.addEventListener("click", function() {abrirAlura(URL1);});

logoOne.addEventListener("click", function() {abrirOne(URL2);});

function verifica(object){

    if(object == null) { document.write("Texto não encontrado.") }

    else if (/[A-Z-À-Ú-à-ú]/.test(object.value)) {document.write("Caracteres inválidos.")}

}

function escreveCodificado() {

    var textoCrip = object

    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
  
    return textoCrip;

    object = texto;

    textoFinal.value = texto;

}

function escreveDecodificado() {

    var textoDesc = object

    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");
  
    return textoDesc;

    object = texto;

    textoFinal.value = texto;

}

function copiarTexto(){

textoFinal.select();
navigator.clipboard.writeText(textoFinal.value);
textoFinal.value = "";

}

code.addEventListener("click", function() {escreveCodificado});

decode.addEventListener("click", function() {escreveDecodificado});

copy.addEventListener("click", function() {copiarTexto});