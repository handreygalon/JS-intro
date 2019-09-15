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

    var pesoValido = validateWeight(peso);
    var alturaValida = validateHeight(altura);

    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        patient.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
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

function validateWeight(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validateHeight(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}