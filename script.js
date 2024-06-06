const widths = [];
const lengths = [];

function sumarAncho() {
    const widthInput = document.getElementById("widthInput");
    const width = parseFloat(widthInput.value);
    widths.push(width);
    actualizarMedidas();
    widthInput.value = ""; // Limpiar el campo de entrada después de ingresar la medida
}

function sumarLargo() {
    const lengthInput = document.getElementById("lengthInput");
    const length = parseFloat(lengthInput.value);
    lengths.push(length);
    actualizarMedidas();
    lengthInput.value = ""; // Limpiar el campo de entrada después de ingresar la medida
}

function actualizarMedidas() {
    const widthSum = widths.reduce((a, b) => a + b, 0);
    const lengthSum = lengths.reduce((a, b) => a + b, 0);
    const area = widthSum * lengthSum;
    const resultElement = document.getElementById("result");
    resultElement.innerText = "Medidas Generales del Terreno:\nAncho: " + widthSum.toFixed(2) + " metros\nLargo: " + lengthSum.toFixed(2) + " metros\nÁrea Total del Terreno: " + area.toFixed(2) + " metros cuadrados";
    resultElement.style.display = "block"; // Mostrar la información del terreno
}

function calcularResultado() {
    const tileSizeWidth = parseFloat(document.getElementById("tileSizeWidth").value);
    const tileSizeLength = parseFloat(document.getElementById("tileSizeLength").value);
    const tileSizeArea = tileSizeWidth * tileSizeLength;

    const terrainArea = parseFloat(document.getElementById("terrainArea").value) || (widths.reduce((a, b) => a + b, 0) * lengths.reduce((a, b) => a + b, 0));
    const tileArea = parseFloat(document.getElementById("tileArea").value) || tileSizeArea;

    const palmetas = Math.ceil(terrainArea / tileArea);

    const resultElement = document.getElementById("result-1");
    resultElement.innerText = "Necesitas comprar " + palmetas + " palmetas de pasto.";
    resultElement.style.display = "block"; // Mantener visible la información del terreno
}

function refreshApp() {
    location.reload();
}

