// var title_name = document.querySelector("h1");

var title_name = document.querySelector(".title_class");
// console.log(title_name.textContent);
title_name.textContent = "Aparecida Nutricionista";

// var patient = document.querySelector("#primeiro-paciente");
var patients = document.querySelectorAll(".paciente");

for(var i = 0; i < patients.length; i++) {
    // console.log(patients[i])
    var patient = patients[i];

    var tdPeso = patient.querySelector(".info-peso");
    var tdAltura = patient.querySelector(".info-altura");
    var tdImc = patient.querySelector(".info-imc");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        //console.log("Peso Inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        patient.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        //console.log("Altura Inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        patient.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        //var tdImc = patient.querySelector(".info-imc");
        var imc = calculaIMC(peso, altura);
        
        tdImc.textContent = imc;
    }
}

/*title_name.addEventListener("click", mostraMensagem);
function mostraMensagem() {
    console.log("Olá, eu fui clicado!");
}*/

// Anonymous function
/*title_name.addEventListener("click", function() {
    console.log("Olá, eu fui clicado através de função anônima!");
});*/

function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}