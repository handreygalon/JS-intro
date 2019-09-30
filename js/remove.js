var patients = document.querySelectorAll(".paciente");

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event) {
    // this -> event owner | target -> who suffered the event
    //var eventTarget = event.target;
    //var fatherTarget = eventTarget.parentNode;
    //fatherTarget.remove();

    /* Now by double-clicking on the element, the event goes up to the table, 
       and inside the function we can ask which td was clicked (event.target) 
       and from there go up to its parent (parentNode) which is the patient's 
       <tr> and remove it */
    //event.target.parentNode.remove();

    // Remove only TD element
    if (event.target.tagName == 'TD') {
        // Add animation when remove a patient
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    }
});

/*patients.forEach(function(patient) {
    patient.addEventListener("dblclick", function () {
        this.remove();
    });    
});*/