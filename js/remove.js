var patients = document.querySelectorAll(".paciente");

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event) {
    //this -> event owner | target -> who suffered the event
    //var eventTarget = event.target;
    //var fatherTarget = eventTarget.parentNode;
    //fatherTarget.remove();
    //event.target.parentNode.remove();

    // Add animation when remove a patient
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
    
});

/*patients.forEach(function(patient) {
    patient.addEventListener("dblclick", function () {
        this.remove();
    });    
});*/