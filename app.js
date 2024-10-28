//Task 1: Setup HTML Structure
//^look at index.html for task 1

//Task 2: Configure the JavaScript for Drawing Context
const canvas = document.getElementById('canvasDrawing'); //canvas element
const ctx = canvas.getContext('2d'); //2D drawing context

let draw = false; //iindicates if drawing is active
let startX, startY; //drawing coordinates
let currentShape = 'line'; //shape being drawn
let selectedColor = '#000000'; //color being drawn

canvas.addEventListener('mousedown', startDrawing); //when mouse is pressed down, startDrawing function is active
canvas.addEventListener('mousemove', draw); //when mouse moves, it draws
canvas.addEventListener('mouseup', stopDrawing); //when mouse is pressed up, stopDrawing function is active

function startDrawing(e) { //startDrawing function
    draw = true; //when drawing, draw function is set to true
    startX = e.offsetX; //coordinates
    startY = e.offsetY; //coordinates
    ctx.beginPath(); //begins new path for drawing
    ctx.strokeStyle = selectedColor; //selected color instead of stroke color
}

function stopDrawing() { //stopDrawing function
    draw = false; //stops drawing
}

//Task 3: Implement shape drawing logic
document.querySelectorAll('input[name="shape"]').forEach(input => { //selects radio buttons
    input.addEventListener('change', (e) => { //changing shapes
        currentShape = e.target.value; //shape being drawn is shape selected
    });
});

function whenDrawing(e) { //whenDrawing function
    if (!draw) return; //when drawing

    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears canvas

    const endX = e.offsetX; //mouse coordinates
    const endY = e.offsetY; //mouse coordinates
    const width = endX - startX; //shape dimensions according to mouse movements
    const height = endY - startY; //shape dimensions according to mouse movements

    if (currentShape === 'line') { //if shape is a line
        ctx.moveTo(startX, startY); //mouse coordinates of line
        ctx.lineTo(endX, endY); //mouse coordinates of line
    } else if (currentShape === 'rectangle') { //if shape is rectangle
        ctx.strokeRect(startX, startY, width, height); //rectangle coordinates according to mouse movements
    } else if (currentShape === 'circle') { //if shape is circle
        const radius = Math.sqrt(width ** 2 + height ** 2); //circle radius according to mouse movements
        ctx.arc(startX, startY, radius, 0, Math.PI * 2); //circle arc according to mouse movements
    }

    ctx.stroke();
}

//Task 4: Add Color Selection and Canvas Clearing
const colorPicker = document.getElementById('colorPicker'); //reference html colorPicker
colorPicker.addEventListener('input', (e) => {
    selectedColor = e.target.value; //retrieves selected color from colorPicker and updates new color
});

const clearButton = document.getElementById('clearCanvas'); //reference html clearCanvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears entire canvas
});