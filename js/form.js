var addButton = document.querySelector("#adicionar-paciente");
addButton.addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão (recarregar toda página)
    
    var form = document.querySelector("#form-add");
    
    // Extracting info from form
    var patient = getPatientFromForm(form);

    // Creating tr and td
    var patientTr = buildTr(patient);

    // Add patient to the table
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(patientTr);

    form.reset();
});

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

    patientTr.appendChild(buildTd(patient.name, "info-nome"));
    patientTr.appendChild(buildTd(patient.weight, "info-peso"));
    patientTr.appendChild(buildTd(patient.height, "info-altura"));
    patientTr.appendChild(buildTd(patient.fat, "info-gordura"));
    patientTr.appendChild(buildTd(patient.imc, "info-imc"));

    return patientTr;
}

function buildTd(data, class_name) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(class_name);

    return td;
}