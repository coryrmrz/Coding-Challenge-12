//Task 1: Setup HTML Structure
//^look at index.html for task 1

//Task 2: Configure the JavaScript for Drawing Context
const canvas = document.getElementById('canvasDrawing'); //canvas element
const ctx = canvas.getContext('2d'); //2D drawing context

let draw = false; //iindicates if drawing is active
let startX, startY; //drawing coordinates
let currentShape = 'line'; //shape being drawn
let selectedColor = '#f0f0f0'; //color being drawn

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