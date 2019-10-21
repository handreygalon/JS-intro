var addButton = document.querySelector("#adicionar-paciente");
addButton.addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão (recarregar toda página)
    
    var form = document.querySelector("#form-add");
    var patient = getPatientFromForm(form);  // Extracting info from form

    var arrErr = validatePatient(patient);
    console.log(arrErr);
    if (arrErr.length > 0) {
        showMsgError(arrErr);        
        return;
    }

    addPatientToTable(patient);

    form.reset();
    var msgErrors = document.querySelector("#mensagens-erro");
    msgErrors.innerHTML = "";
});

function addPatientToTable(patient) {
    var patientTr = buildTr(patient);
    var tabela = document.querySelector("#tabela-pacientes");  // Add patient to the table
    tabela.appendChild(patientTr);
}

function getPatientFromForm(form) {
    var patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return patient;
}

function buildTr(patient) {
    var patientTr = document.createElement("tr");
    patientTr.classList.add("paciente"); 

    patientTr.appendChild(buildTd(patient.nome, "info-nome"));
    patientTr.appendChild(buildTd(patient.peso, "info-peso"));
    patientTr.appendChild(buildTd(patient.altura, "info-altura"));
    patientTr.appendChild(buildTd(patient.gordura, "info-gordura"));
    patientTr.appendChild(buildTd(patient.imc, "info-imc"));

    return patientTr;
}

function buildTd(data, class_name) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(class_name);

    return td;
}

function validatePatient(patient) {
    var arrError = [];

    if (patient.name.length == 0) {
        arrError.push("Name can not be blank");
    }

    if (!validateWeight(patient.weight)) {
        arrError.push("Invalid Weight!")
    }

    if (!validateHeight(patient.height)) {
        arrError.push("Invalid Height!")
    }

    if (patient.fat.length == 0) {
        arrError.push("Fat can not be blank");
    }

    if (patient.weight.length == 0) {
        arrError.push("Weight can not be blank");
    }

    if (patient.height.length == 0) {
        arrError.push("Height can not be blank");
    }

    return arrError;
}

function showMsgError(arrError) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // Allows to control the internal HTML of an element.

    arrError.forEach(function(error) {
        var li = document.createElement("li"); // <li></li>
        li.textContent = error;
        ul.appendChild(li);
    });
}