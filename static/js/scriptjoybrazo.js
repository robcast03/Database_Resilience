
// Variables globales para almacenar los valores recibidos
var angulo1Value, angulo2Value, angulo3Value, angulo4Value, angulo5Value, angulo6Value;
var vel1Value, vel2Value, vel3Value, vel4Value, vel5Value, vel6Value;
var referenciaValue, posxValue, posyValue, poszValue;

// Función para actualizar el valor del input number cuando se mueve el slider
function updateNumberInput(sliderId, numberInputId, storageVariable) {
    var slider = document.getElementById(sliderId);
    var numberInput = document.getElementById(numberInputId);

    // Actualizar el valor del input number cuando se cambia el valor del slider
    slider.addEventListener('input', function() {
        numberInput.value = slider.value;
        // Almacenar el valor en la variable global correspondiente
        window[storageVariable] = numberInput.value;
        // Mostrar el valor en la consola
        console.log(storageVariable + ': ' + numberInput.value);
    });

    // Actualizar el valor del slider cuando se cambia el valor del input number
    numberInput.addEventListener('input', function() {
        slider.value = numberInput.value;
        // Almacenar el valor en la variable global correspondiente
        window[storageVariable] = numberInput.value;
        // Mostrar el valor en la consola
        console.log(storageVariable + ': ' + numberInput.value);
    });
}

// Llamar a la función para cada par de slider y input number, y asignar la variable de almacenamiento correspondiente
updateNumberInput('Grado1', 'angulo1', 'angulo1Value');
updateNumberInput('Grado2', 'angulo2', 'angulo2Value');
updateNumberInput('Grado3', 'angulo3', 'angulo3Value');
updateNumberInput('Grado4', 'angulo4', 'angulo4Value');
updateNumberInput('Grado5', 'angulo5', 'angulo5Value');
updateNumberInput('Grado6', 'angulo6', 'angulo6Value');
updateNumberInput('VELOCIDAD1', 'vel1', 'vel1Value');
updateNumberInput('VELOCIDAD2', 'vel2', 'vel2Value');
updateNumberInput('VELOCIDAD3', 'vel3', 'vel3Value');
updateNumberInput('VELOCIDAD4', 'vel4', 'vel4Value');
updateNumberInput('VELOCIDAD5', 'vel5', 'vel5Value');
updateNumberInput('VELOCIDAD6', 'vel6', 'vel6Value');
updateNumberInput('referen', 'Referencia', 'referenciaValue');
updateNumberInput('POSICIONX', 'posx', 'posxValue');
updateNumberInput('POSICIONY', 'posy', 'posyValue');
updateNumberInput('POSICIONZ', 'posz', 'poszValue');

