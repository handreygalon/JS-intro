var patients = document.querySelectorAll(".paciente");

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event) {
    //var eventTarget = event.target;
    //var fatherTarget = eventTarget.parentNode;
    //fatherTarget.remove();
    event.target.parentNode.remove();
});

/*patients.forEach(function(patient) {
    patient.addEventListener("dblclick", function () {
        this.remove();
    });    
});*/