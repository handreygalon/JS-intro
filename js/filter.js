var fieldFilter = document.querySelector("#filtrar-tabela");

fieldFilter.addEventListener("input", function() {
    /* this -> referente ao dono do evento, neste caso, o campo filtro, nele que está o evento de input
       fieldFilter.value é a mesma coisa que fazer this.value */
    var patients = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0) {
        for(var i = 0; i < patients.length; i++) {
            var patient = patients[i];
    
            var tdName = patient.querySelector(".info-nome");
            var name = tdName.textContent;

            /*
            name.substr(0, this.value.length); 

            var compare = nome.substr(0, this.value.length);
            if (!(this.value == compare)) {
                patient.classList.add("invisible");
            } else{
                patient.classList.remove("invisible");
            }

            OR, compare upper and lowercase:

            var comparavel = nome.substr(0, this.value.length);
            var comparavelMinusculo = comparavel.toLowerCase();
            var valorDigitadoMinusculo = this.value.toLowerCase();

            if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
                paciente.classList.add("invisivel");
            } else{
                paciente.classList.remove("invisivel");
            }
            */

            var expression = new RegExp(this.value, "i");
    
            /* Conteúdo de texto do campo */
            if (!expression.test(name)) {
                patient.classList.add("invisible");
            } else {
                patient.classList.remove("invisible");
            }
        } 
    }else {
        for(var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            patient.classList.remove("invisible");
        }            
    }
});