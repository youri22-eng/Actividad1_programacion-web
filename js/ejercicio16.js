// Funciones flecha para cada operación básica
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";


const calcularOperacion = (operacion) => {
    let num1Input = document.getElementById("numero1");
    let num2Input = document.getElementById("numero2");
    let resultadoInput = document.getElementById("resultado");

    let n1 = parseFloat(num1Input.value);
    let n2 = parseFloat(num2Input.value);
    if (num1Input.value.trim() === "" || num2Input.value.trim() === "" || isNaN(n1) || isNaN(n2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingresa números válidos'
        });
        resultadoInput.value = "";
        return;
    }

    let resultado;

    if (operacion === 'suma') {
        resultado = sumar(n1, n2);
    } else if (operacion === 'resta') {
        resultado = restar(n1, n2);
    } else if (operacion === 'multiplicacion') {
        resultado = multiplicar(n1, n2);
    } else if (operacion === 'division') {
        resultado = dividir(n1, n2);
        
        if (n2 === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'AGUAS',
                text: 'No se puede dividir entre cero'
            });
        }
    }
    resultadoInput.value = resultado;
};