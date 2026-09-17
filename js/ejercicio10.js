function convertir() {
  var celsiusInput = document.getElementById("celsius").value;
  var f = document.getElementById("fahrenheit");
  
  var celsius = parseFloat(celsiusInput); 

  if (isNaN(celsius)) {
    alert("Por favor ingresa un valor numérico válido en Celsius.");
  } else {
    var resultado = (celsius * 9/5) + 32;

    f.value = resultado + "°F";
  }
  
}