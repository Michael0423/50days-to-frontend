const sizeRange = [5, 50];
const minusBtn = document.getElementById('minus_btn');
const plusBtn = document.getElementById('plus_btn');
const currentSizeDiv = document.getElementById('current_size');
const refreashBtn = document.getElementById('refreash_btn');
const sizeStep = 5;
const colorPicker = document.getElementById('color');
let currentSize = 5, currentColor = '#000000';

minusBtn.addEventListener('click', minusSize);
plusBtn.addEventListener('click', plusSize);
colorPicker.addEventListener('change', changeColor);
refreashBtn.addEventListener('click', clearCanvas);

function minusSize() {
    currentSize = (currentSize - sizeStep >= sizeRange[0]) ? currentSize - sizeStep : currentSize;
    currentSizeDiv.innerHTML = currentSize;
}
function plusSize() {
    currentSize = (currentSize + sizeStep <= sizeRange[1]) ? currentSize + sizeStep : currentSize;
    currentSizeDiv.innerHTML = currentSize;
}
function changeColor(e) {
    currentColor = e.target.value;
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isPressed = false, point = { x: 0, y: 0 };

canvas.addEventListener('mousedown', drawingStart);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', drawingEnd);

function drawingStart(e) {
    isPressed = true;    
    point.x = e.offsetX;
    point.y = e.offsetY;
}

function drawing(e) {
    if(isPressed){
        let point2 = { x: e.offsetX, y: e.offsetY };
        drawCircle(point2);
        drawLine(point, point2);
        point = point2;
    }
}

function drawingEnd() {
    isPressed = false;
}

function drawCircle(point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, currentSize, 0, Math.PI * 2)
    ctx.fillStyle = currentColor
    ctx.fill()
}
function drawLine(point1, point2) {
    ctx.beginPath();
    
    ctx.strokeStyle = currentColor
    ctx.lineWidth = currentSize * 2

    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
}