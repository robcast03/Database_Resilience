function iniciarMapa(){
    var coord={lat:4.683502,lng:-74.0424858};
    var map=new google.maps.Map(document.getElementById('map'),{
        zoom:15,
        center:coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map:map
    })
}

// Función para actualizar los valores de los sensores en el contenedor cont_gemelo
// Suponiendo que obtienes los valores de los sensores y los actualizass en JavaScript.

// Variables de ejemplo para los valores de los sensores
var temperatureValue = 251;
var pressureValue = 101;
var signalQuality = 801;
var humidityValue =154;


// Actualización de los valores en el HTML
document.getElementById('temperatureValue').innerText = temperatureValue;
document.getElementById('pressureValue').innerText = pressureValue;
document.getElementById('signalQuality').innerText = signalQuality;
document.getElementById('humidityValue').innerText = humidityValue;

function actualizarValoresSensores(presion, temperatura, viento, humedad) {
    document.getElementById('presionValor').innerText = presion;
    document.getElementById('temperaturaValor').innerText = temperatura;
    document.getElementById('vientoValor').innerText = viento;
    document.getElementById('humedadValor').innerText = humedad;
}

// Simulación de actualización de valores de sensores (puedes cambiar esto por tus datos reales)
function actualizarValoresSimulados() {
    // Aquí obtienes los valores de presión, temperatura y dirección del viento
    // Puedes obtener estos valores de tu fuente de datos real
    var presion = obtenerValorPresion();
    var temperatura = obtenerValorTemperatura();
    var viento = obtenerDireccionViento();
    var humedad = obtenerValorHumedad();

    // Llamada a la función para actualizar los valores en el contenedor cont_gemelo
    actualizarValoresSensores(presion, temperatura, viento, humedad);
}

// Llamar a la función de actualización de valores simulados cada cierto intervalo de tiempo
setInterval(actualizarValoresSimulados, 5000); // Por ejemplo, cada 5 segundos

document.addEventListener("DOMContentLoaded", function() {
    var maxSpeed = 220; // Velocidad máxima del viento (por ejemplo)

    // Inicializamos un contador de tiempo
    var time = 0;

    // Establecemos el intervalo para actualizar el velocímetro del viento
    setInterval(function() {
        // Simulamos obtener datos del sensor de velocidad del viento (puedes reemplazar esto con tus propios datos)
        var windSpeed = obtenerVelocidadViento();

        // Actualizamos el velocímetro con el nuevo valor de velocidad del viento
        updateWindSpeedometer(windSpeed);
    }, 2000); // Intervalo de actualización en milisegundos (ajusta según sea necesario)

    function obtenerVelocidadViento() {
        // Aquí puedes obtener la velocidad del viento de tu fuente de datos o simularla
        // Por ahora, generamos un valor aleatorio entre 0 y 100 para simular la velocidad del viento
        return Math.random() * 100;
    }

    function updateWindSpeedometer(speed) {
        var progressBar = document.querySelector('.speedometer__progress');
        var needle = document.querySelector('.speedometer__needle');
        var speedText = document.querySelector('.speedometer__text');

        // Convertimos la velocidad del viento a un porcentaje para la barra de progreso
        var widthPercentage = (speed / maxSpeed) * 100;

        // Aplicamos el ancho de la barra de progreso con transición
        progressBar.style.transition = "width 1s ease"; // Puedes ajustar la duración de la transición
        progressBar.style.width = widthPercentage + "%";

        // Aplicamos el ángulo de la aguja con transición
        needle.style.transition = "transform 1s ease"; // Puedes ajustar la duración de la transición
        needle.style.transform = "translateY(-50%) rotate(" + (widthPercentage * 1.8) + "deg)";

        // Mostramos el valor de la velocidad del viento
        speedText.textContent = Math.round(speed) + " km/h"; // Puedes ajustar el formato según sea necesario
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var maxTemperature = 100; // Temperatura máxima del sensor (por ejemplo)

    // Establecemos el intervalo para actualizar el medidor de temperatura
    setInterval(function() {
        // Simulamos obtener datos del sensor de temperatura de tu robot (reemplaza esto con tus propios datos)
        var robotTemperature = obtenerTemperaturaRobot();

        // Actualizamos el medidor de temperatura con el nuevo valor
        updateTemperatureMeter(robotTemperature);
    }, 2000); // Intervalo de actualización en milisegundos (ajusta según sea necesario)

    function obtenerTemperaturaRobot() {
        // Aquí puedes obtener la temperatura de tu fuente de datos o simularla
        // Por ahora, generamos un valor aleatorio entre 0 y 100 para simular la temperatura
        return Math.random() * 100;
    }

    function updateTemperatureMeter(temperature) {
        var progressBar = document.querySelector('.temperature__progress');
        var needle = document.querySelector('.temperature__needle');
        var temperatureText = document.querySelector('.temperature__text');

        // Convertimos la temperatura a un porcentaje para la barra de progreso
        var widthPercentage = (temperature / maxTemperature) * 100;

        // Aplicamos el ancho de la barra de progreso con transición
        progressBar.style.transition = "width 1s ease"; // Puedes ajustar la duración de la transición
        progressBar.style.width = widthPercentage + "%";

        // Aplicamos el ángulo de la aguja con transición
        needle.style.transition = "transform 1s ease"; // Puedes ajustar la duración de la transición
        needle.style.transform = "translateY(-50%) rotate(" + (widthPercentage * 1.8) + "deg)";

        // Mostramos el valor de la temperatura
        temperatureText.textContent = Math.round(temperature) + " °C"; // Puedes ajustar el formato según sea necesario
    }
});
