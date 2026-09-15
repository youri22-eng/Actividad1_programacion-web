function convertir() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  const celsius = celsiusInput.value;

  if (celsius === "" || isNaN(celsius)) {
    alert("Por favor ingresa un valor numérico válido en Celsius.");
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;

  fahrenheitInput.value = fahrenheit + "°F";
}