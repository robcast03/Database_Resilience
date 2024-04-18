
function actualizarVelocidades() {
    // Generar valores aleatorios para las velocidades de los motores (entre 0 y 100)
    let velocidades = [];
    for (let i = 0; i < 6; i++) {
        velocidades.push(Math.floor(Math.random() * 101));
    }

    // Actualizar los cuadros de velocidad con los nuevos valores
    for (let i = 0; i < 6; i++) {
        updateSpeedometer('motor' + (i + 1), velocidades[i]);
    }
}

function updateSpeedometer(id, speed) {
    var progressBar = document.getElementById(id).querySelector('.speedometer__progress');
    var speedText = document.getElementById(id).querySelector('.speedometer__text');

    // Convertir la velocidad a un porcentaje para el ancho de la barra de progreso
    var widthPercentage = (speed / 100) * 100;

    // Aplicar el ancho de la barra de progreso con transición
    progressBar.style.transition = "width 0.5s";
    progressBar.style.width = widthPercentage + "%";

    // Mostrar el valor de la velocidad
    speedText.textContent = speed + " km/h";
}


// Llamar a la función para actualizar las velocidades cada cierto intervalo de tiempo (por ejemplo, cada segundo)
setInterval(actualizarVelocidades, 1000);

// Función para actualizar el valor del input number cuando se mueve el slider
function updateNumberInput(sliderId, numberInputId) {
    var slider = document.getElementById(sliderId);
    var numberInput = document.getElementById(numberInputId);

    // Actualizar el valor del input number cuando se cambia el valor del slider
    slider.addEventListener('input', function() {
        numberInput.value = slider.value;
    });

    // Actualizar el valor del slider cuando se cambia el valor del input number
    numberInput.addEventListener('input', function() {
        slider.value = numberInput.value;
    });
}

// Llamar a la función para cada par de slider y input number
updateNumberInput('grado1', 'angulo1');
updateNumberInput('grado2', 'angulo2');
updateNumberInput('grado3', 'angulo3');
updateNumberInput('grado4', 'angulo4');
updateNumberInput('grado5', 'angulo5');
updateNumberInput('grado6', 'angulo');
updateNumberInput('referen', 'Referencia');
