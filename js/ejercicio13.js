function verificador() {
    var edadImput = document.getElementById("Edad").value;
    const votoImput = document.getElementById("Voto");

    var Edad = parseInt(edadImput);

    if(isNaN(Edad) || edadImput.trim()==="") {
        alert("Porfavor ingresa una EDAD correcta")
        votoImput.value = "";
        return;
    }
    
    if (Edad >=18 ){
        votoImput.value = "Puedes votar";
    }
    else {
        votoImput.value = "No puedes votar"; 
    }

}