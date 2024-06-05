const widths = [];
const lengths = [];

function sumarAncho() {
    const width = parseFloat(document.getElementById("widthInput").value);
    widths.push(width);
    actualizarMedidas();
}

function sumarLargo() {
    const length = parseFloat(document.getElementById("lengthInput").value);
    lengths.push(length);
    actualizarMedidas();
}

function actualizarMedidas() {
    const widthSum = widths.reduce((a, b) => a + b, 0);
    const lengthSum = lengths.reduce((a, b) => a + b, 0);
    const area = widthSum * lengthSum;
    document.getElementById("result").innerText = "Medidas Generales del Terreno:\nAncho: " + widthSum.toFixed(2) + " metros\nLargo: " + lengthSum.toFixed(2) + " metros\nÁrea Total del Terreno: " + area.toFixed(2) + " metros cuadrados";
}

function calcularResultado() {
    const tileSizeWidth = parseFloat(document.getElementById("tileSizeWidth").value);
    const tileSizeLength = parseFloat(document.getElementById("tileSizeLength").value);
    const tileSizeArea = tileSizeWidth * tileSizeLength;

    const terrainArea = parseFloat(document.getElementById("terrainArea").value) || (widths.reduce((a, b) => a + b, 0) * lengths.reduce((a, b) => a + b, 0));
    const tileArea = parseFloat(document.getElementById("tileArea").value) || tileSizeArea;

    const palmetas = Math.ceil(terrainArea / tileArea);

    document.getElementById("result").innerText = "Necesitas comprar " + palmetas + " palmetas de pasto.";
}
