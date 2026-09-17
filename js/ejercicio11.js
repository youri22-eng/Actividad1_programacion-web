function convertir() {
    var kmInput = document.getElementById("Km").value;
    const millasInput = document.getElementById("Millas");


    var km = parseFloat(kmInput); 

    if (isNaN(km)) {
        alert("Por favor ingresa un valor correcto");

    } else {
      
       var  resultado = km * 0.6214;
        millasInput.value = millas;
        
    }
}
