const DEFAULTSIZE = 16;
const DEFAULTMODE = 'color';

let defaultsize = DEFAULTSIZE;
let defaultMode = DEFAULTMODE;

const container = document.querySelector('#grid-container');
const buttonDraw = document.querySelector('#btn-draw');
const buttonRDraw = document.querySelector('#btn-r-draw');
const buttonErase = document.querySelector('#btn-erase');
const buttonClear = document.querySelector('#btn-clear');
const buttonSize = document.querySelector('#btn-size');

buttonDraw.onclick = () => changeMode('color');
buttonRDraw.onclick = () => changeMode('rainbow');
buttonErase.onclick = () => changeMode('eraser');
buttonClear.addEventListener('click', gridClear);
buttonSize.addEventListener('click', gridSize);

function gridClear(){
    container.innerHTML = '';
    createBoxes(defaultsize);
}
function gridSize(){
    let input = prompt("Enter a whole number.");
    while(input >= 101){
        input = prompt("Sorry, you can only enter 1 to 101.");
    }
    while(isNaN(input) === true){
        input = prompt("Sorry, you can only a whole number.");
    }
    console.log(typeof input);
    defaultsize = input;
    container.innerHTML = '';
    createBoxes(defaultsize);
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createBoxes(size){
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;
    for(let i = 1; i <= size * size; i++){
        let gridBox = document.createElement('div');
        gridBox.classList.add('grid-Element')
        container.appendChild(gridBox);
        gridBox.addEventListener('mouseover', changeColor);
        gridBox.addEventListener('mousedown', changeColor);
    }
}
function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return

    if(defaultMode === 'color'){
        e.target.style.backgroundColor = '#2b2b2b';
    }
    else if (defaultMode == 'rainbow'){
        const R = Math.floor(Math.random()*256);
        const G = Math.floor(Math.random()*256);
        const B = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${R},${G},${B})`;
    }
    else if(defaultMode === 'eraser'){
        e.target.style.backgroundColor = 'white';
    }
}
function changeMode(newMode){
    activeMode(newMode);
    defaultMode = newMode;
}
function activeMode(newMode){
    if(defaultMode === 'color'){
        buttonDraw.classList.remove('active');
    }
    else if(defaultMode === 'rainbow'){
        buttonRDraw.classList.remove('active');
    }
    else if(defaultMode === 'eraser'){
        buttonErase.classList.remove('active');
    }

    if(newMode === 'color'){
        buttonDraw.classList.add('active');
    }
    else if(newMode === 'rainbow'){
        buttonRDraw.classList.add('active');
    }
    else if(newMode === 'eraser'){
        buttonErase.classList.add('active');
    }
}
createBoxes(defaultsize);