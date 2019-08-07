// var title_name = document.querySelector("h1");

var title_name = document.querySelector(".title_class");
// console.log(title_name.textContent);
title_name.textContent = "Aparecida Nutricionista";

var patient = document.querySelector("#primeiro-paciente");
// console.log(patient);

var tdPeso = patient.querySelector(".info-peso");
var tdAltura = patient.querySelector(".info-altura");
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
// console.log(patient); // tr
// console.log(tdPeso); // td
// console.log(peso); // 100
// console.log(altura); // 2.00

var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso Inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura Inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
}

if (pesoValido && alturaValida) {
    var tdImc = patient.querySelector(".info-imc");
    var imc = peso / (altura * altura);
    // console.log(imc);
    
    tdImc.textContent = imc;
}
