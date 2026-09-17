function calcular() {
    let numerosInput = document.getElementById("nums").value;

    let mayorInput = document.getElementById("mayor");
    let minimoInput = document.getElementById("menor");
    let promedioInput = document.getElementById("promedio");

    let arreglo = numerosInput.split(",");

    let numeros = arreglo.map(Number);


    if(numerosInput.trim() === "" || numeros.some(isNaN)){
        alert("Porfavor ingresa una lista de números correcta");
        return;
    }



    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);

    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / numeros.length;
    
    mayorInput.value = maximo;
    minimoInput.value = minimo;
    promedioInput.value = promedio; 

}