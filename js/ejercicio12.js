function convertir() {
    var PesosImput= document.getElementById("Pm").value;
    var DolaresImput = document.getElementById("D");

    var Pesos = parseFloat(PesosImput);

    if(isNaN(Pesos)) {
        alert ("Ingresa un valor correcto");
    } else {
        var resultado = Pesos * 0.055;
        DolaresImput.value = resultado + " Dólares";
    }
}