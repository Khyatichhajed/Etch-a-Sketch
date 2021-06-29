
const container = document.getElementById("container");
var color='rainbow';
var color_picker=document.getElementById('input-color');
const colorButton=document.querySelectorAll(".color-choice");

colorButton.forEach(colorButton=>colorButton.addEventListener('click',changeColor));
makeRows(16,16);
function makeRows(rows,cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < rows; c++) {
        for (r = 0; r < cols; r++) {
            let cell = document.createElement("div");
            // cell.innerText = (c + 1);
            cell.style.backgroundColor='white';
            container.appendChild(cell).className = "grid-item";
        };
    };
    var gridDivs=container.querySelectorAll('div');
gridDivs.forEach(gridDivs=>gridDivs.addEventListener('mouseover',colorGrid));
};
// var sizing=document.querySelector('.sizing');
function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(sizing.value);
}
function colorGrid(){
    switch(color){
    case 'rainbow':
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.classList.remove('gray');
    break;  
    case 'gray':
        this.style.backgroundColor = 'gray' 
    break;
case 'eraser':
    this.style.backgroundColor = '#ffffff';
    this.classList.remove('gray');
    break;
case 'black':
    this.style.backgroundColor = '#000000';
    this.classList.remove('gray');
    break;
default:
    this.style.backgroundColor = color;
    this.classList.remove('gray');
    break;
        
    }
}
function userChoice(event){
color=event.target.value;
}
color_picker.addEventListener('change', userChoice, false);
function changeColor(event) {
switch (event.target.dataset.color) { 
case 'rainbow':
    color = 'rainbow';
    break;  
case 'gray':
    color = 'gray';
    break;
case 'eraser':
    color = 'eraser';
    break;
default:
    color = 'black';
    break;
} 
}
const clear=document.getElementById('clear');
clear.addEventListener("click",clearAll);
function clearAll(){
    var gD=container.querySelectorAll('div');
    gD.forEach(gd=>gd.style.backgroundColor='white');
}

let sizing=document.getElementById('sizing');

var btn=document.querySelector('div.btn');

let p=document.createElement('p');

sizing.addEventListener('mouseup',range);
sizing.addEventListener('change',range);

function range(){
    p.textContent=sizing.value;
}
sizing.addEventListener('mouseup',pixelSize);
sizing.addEventListener('change',pixelSize);
function pixelSize(){
btn.appendChild(p);

    let gridPixel=container.querySelectorAll('div');
    gridPixel.forEach(gridPixel=>gridPixel.remove());
    makeRows(sizing.value,sizing.value);
}
