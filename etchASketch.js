const parentNode = document.querySelector('.container');
const test = document.getElementsByClassName('boxes');

let squaresPerSide = 16;
let countBlack=0;
let countRandom=0;

//creates number of boxes as per user input or default value
function createBoxes(squaresPerSide) {
    for (i = 0; i < squaresPerSide; i++) {
        for (j = 0; j < squaresPerSide; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'boxes');                                                                                                              //creating default boxes using css grid.
            div.style.cssText = 'border: 1px solid red;'
            parentNode.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
            parentNode.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;                                                                            //passing value to css from js to change things dynamically
            parentNode.appendChild(div);
        }
    }
    eventListen();
}

createBoxes(squaresPerSide);

function numberOfBoxes() {
    squaresPerSide = window.prompt("Enter The number of Squares Per side", "Please Enter a Number");
 
    while (true) {                                                                                                            //Asking user for number of boxes
        if (isNaN(squaresPerSide) || squaresPerSide > 64 || squaresPerSide < 0) {
            console.log("prompt"+squaresPerSide);
            squaresPerSide = window.prompt("Enter The number of Squares Per side", "Please Enter a Number less than 65 and greater than 0");
        }
        else if(squaresPerSide==null){
            squaresPerSide = window.prompt("Enter The number of Squares Per side", "Please don't cancel");
        }
        else {
            break;
        }
    }
    
}

function randomColor(){
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' 
                + (Math.floor(Math.random() * 256)) + ')';
    return randomColor;
}
//event listener for mouseover
function eventListen() {
    countRandom=0;
    for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
        document.getElementsByClassName('boxes')[i].addEventListener("mouseover", function (event) {                                               //Eventlistener to change the background color when mouse over is done.
        if(countRandom>0){
            event.target.style.backgroundColor =randomColor();}
        else{
            event.target.style.backgroundColor = 'black'; 
        }         
        }
        );
    }
}
//event listener for reseting grid
document.getElementById('buttonClick').addEventListener("click", function () {
    let del = document.getElementsByClassName('boxes');

    while (del[0]) {
        del[0].parentNode.removeChild(del[0]);
    }
    numberOfBoxes();
    
    createBoxes(squaresPerSide);
});

document.getElementById('randomColor').addEventListener("click",function(){
    countRandom++;
 });



