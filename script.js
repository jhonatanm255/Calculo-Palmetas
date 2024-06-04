var widths = [];
var lengths = [];

function sumarAncho() {
    var width = parseFloat(document.getElementById("widthInput").value);
    widths.push(width);
    actualizarMedidas();
}

function sumarLargo() {
    var length = parseFloat(document.getElementById("lengthInput").value);
    lengths.push(length);
    actualizarMedidas();
}

function actualizarMedidas() {
    var widthSum = widths.reduce((a, b) => a + b, 0);
    var lengthSum = lengths.reduce((a, b) => a + b, 0);
    var area = widthSum * lengthSum;
    document.getElementById("result").innerText = "Medidas Generales del Terreno:\nAncho: " + widthSum.toFixed(2) + " metros\nLargo: " + lengthSum.toFixed(2) + " metros\nÁrea Total del Terreno: " + area.toFixed(2) + " metros cuadrados";
}

function calcularResultado() {
    var tileSizeWidth = parseFloat(document.getElementById("tileSizeWidth").value);
    var tileSizeLength = parseFloat(document.getElementById("tileSizeLength").value);
    var tileSizeWidth = parseFloat(document.getElementById("tileSizeWidth").value);
    var tileSizeLength = parseFloat(document.getElementById("tileSizeLength").value);
    var tileSizeArea = tileSizeWidth * tileSizeLength;

    var area = widths.reduce((a, b) => a + b, 0) * lengths.reduce((a, b) => a + b, 0);
    var palmetas = Math.ceil(area / tileSizeArea);

    document.getElementById("result").innerText += "\n\nNecesitas comprar " + palmetas + " palmetas de pasto.";
}

