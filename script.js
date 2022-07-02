const container = document.querySelector('.grid-container');
const addGridBtn = document.querySelector('#btn-grid'); 
const addBoxBtn = document.querySelector('#btn-add');
const removeBoxBtn = document.querySelector('#btn-minus');
const removeGridBtn = document.querySelector('#btn-trash');

addGridBtn.addEventListener('click', inputGridCount);
removeBoxBtn.addEventListener('click', removeOneChild);
addBoxBtn.addEventListener('click', addOneChild);
removeGridBtn.addEventListener('click', removeGrid);


function inputGridCount(){
    let input = parseInt(prompt("Enter how many columns and row you want to add."));
    while(input >= 101){
        input = parseInt(prompt("Sorry, you can only enter 1 to 100."));
    }
    while(typeof input == 'string'){
        input = parseInt(prompt("Sorry, you can only enter a number"));
    }
    console.log(typeof input);
    return createBoxes(input);
}

function createBoxes(userInput){
    let gridCount = userInput;
    let grids = gridCount * gridCount;
    container.style.display = 'grid';
    container.style.gridTemplateColumns = "repeat("+gridCount+",auto)"
    for(let i = 1; i <= grids; i++){
        let gridBox = document.createElement('div');
        gridBox.style.backgroundColor = 'white';
        gridBox.style.border = "1px solid black";
        gridBox.style.padding = '20px';
        container.appendChild(gridBox);
        gridBox.addEventListener('click', draw);
    }
}

function removeOneChild(){
    container.lastElementChild.remove();
}
function removeGrid(){
    while(container.lastElementChild){
        container.lastElementChild.remove();
    }
}
function addOneChild(){
    let gridBox = document.createElement('div');
    gridBox.style.backgroundColor = 'white';
    gridBox.style.border = "1px solid black";
    gridBox.style.padding = '20px';
    container.appendChild(gridBox);
    gridBox.addEventListener('click', draw);
}

function draw(e){
    let x = Math.floor(Math.random()*255);
    let y = Math.floor(Math.random()*255);
    let z = Math.floor(Math.random()*255);
    e.target.style.backgroundColor = "rgb("+x+","+y+","+z+")";
}
//default 8x8
createBoxes(8);

