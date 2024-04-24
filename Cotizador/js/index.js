//Variables

var resultado = document.getElementById("resultado").value;
var colorIphone = document.getElementById("color");
var capacidadIphone = document.getElementById("capacidad");
var cantidad = document.getElementById("cantidad");
var imagenProducto = document.getElementById("imagen-producto");
var descipcion = document.getElementById("descripcion");
var precioTotal = 0;


function seleccionCapacidad() {
    var capacidadSeleccionada = capacidadIphone.value;
    var precioIphone = 0;
    switch (capacidadSeleccionada) { //Hago un switch a los values de cada option

        case "128":
            precioIphone = 485000;
            break;
        case "256":
            precioIphone = 617000;
            break;
        case "512":
            precioIphone = 1006800;
            break;

    }
    console.log(precioIphone); //Un console log para verificar el cambio
    return precioIphone; //Retorno el valor asignado a cada case
}

function changeProductImage() {
    var colorSeleccionado = colorIphone.value;
    var imagenProducto = document.getElementById("imagen-producto");
    switch (colorSeleccionado) {
        //Hago un switch a los values de cada option
        case "0":
            imagenProducto.src = "img/iphone_13.png"

            break;
        case "graphite":
            imagenProducto.src = "img/iphone_13_graphite.png"
            document.getElementById("descripcion").innerHTML = `Grafito
            <br>• Marca: Apple
            <br>• Modelo: iPhone 13 Pro
            <br>• Color: Graphite
            <br>• Memoria interna: 128 GB
            <br>• Memoria RAM: 4 GB
            <br>• Dual SIM: No
            <br>• Compañía telefónica: Liberado
            <br>• Sistema operativo: iOS 15
            <br>• Tamaño de la pantalla: 6.1"
            <br>• Resolución de la cámara: 12 MP
            <br>• Red: 5G
            <br>• Con pantalla táctil: Si
            <br>• Cámara digital: Si
            <br>• Capacidad de tarjeta de memoria: 128 GB
            <br>• USB: USB - C
            <br>• Teclado QWERTY: No
            <br>• Wi - Fi: Si
            <br>• Con GPS: Si
            <br>• Radio: Si
            <br>• Reproductor de música: Si
            <br>• Grabador de voz: Si
            <br>• Sintonizador de TV: No
            <br>• Tamaño de SIM: Nano - SIM
            <br>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
            <br>• Tipo de batería: De litio recargable integrada
            <br>• Batería removible: No
            <br>• Sensor de movimiento: Si
            <br>• Brillo: Máximo de 1000 nits(normal); brillo máximo de 1, 200 nits(HDR)
            <br>• Flash en cámara frontal: Si
            <br>• Cámara lenta: Si
            <br>• Con Bluetooth: Si
            <br>• Mini HDMI: No
            <br>• Zoom óptico: Si
            <br>• Zoom digital: Si
            <br>• Tipo de pantalla: OLED
            <br>• Modelo del Procesador: Chip A15 Bionic
            <br>• Es a prueba de agua: Clasificación IP68(hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529
            <br>• Lector de huella digital: No
            <br>• Sensor de proximidad: Si
            <br>• Origen: China`;
            break;
        case "silver":
            imagenProducto.src = "img/iphone_13_silver.png";
            break;
        case "sierra":
            imagenProducto.src = "img/iphone_13_sierra.png";
            break;
        case "gold":
            imagenProducto.src = "img/iphone_13_gold.png";
            break;

    }
}



function calculatePrice() {

    //Validaciones

    if (cantidad.value <= 0) {
        resultado = document.getElementById("resultado").innerText = "Cantidad inválida"

    }
    else if (capacidadIphone.value == 0 || colorIphone.value == 0) {
        resultado = document.getElementById("resultado").innerText = "Por favor, llene todos los campos para cotizar"
    }
    else {
        precioTotal = parseInt(seleccionCapacidad() * cantidad.value);
        document.getElementById('resultado').innerText = `Cotización: $ ${precioTotal}.`;
    }

    //No me salio mostrar el mensaje con cambio de color dinamico :(
}