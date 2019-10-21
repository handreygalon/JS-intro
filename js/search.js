var addButton = document.querySelector("#buscar-pacientes");

addButton.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();  // Create an object to do an asinc. HTTP request

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");  // Which method HTTP we will use, in this case: GET
    xhr.addEventListener("load", function() {
        var response = xhr.responseText;
        var patients = JSON.parse(response);

        patients.forEach(function(patient) {
            addPatientToTable(patient);
        });
    });
    xhr.send();
});