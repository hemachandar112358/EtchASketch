const parentNode = document.querySelector('.container');
const test = document.getElementsByClassName('boxes');

let noOfbtnclicks = 0;
let squaresPerSide = 16;

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


}
createBoxes(squaresPerSide);





function numberOfBoxes() {
    squaresPerSide = window.prompt("Enter The number of Squares Per side", "Please Enter a Number");
    console.log(squaresPerSide)
    while (true) {                                                                                                            //Asking user for number of boxes
        if (isNaN(squaresPerSide) || squaresPerSide > 64 || squaresPerSide<0) {
            squaresPerSide = window.prompt("Enter The number of Squares Per side", "Please Enter a Number less than 65");
        }
        else {
            break;
        }

    }

}



//numberOfBoxes();




    for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
        console.log(document.getElementsByClassName('boxes')[i]);
        document.getElementsByClassName('boxes')[i].addEventListener("mouseover",function (event){                                               //Eventlistener to change the background color when mouse over is done.
           //console.log(event);
            event.target.style.backgroundColor = 'green';
        }
        );
    }


document.getElementById('buttonClick').addEventListener("click", function () {
    noOfbtnclicks = noOfbtnclicks + 1;
    let paras = document.getElementsByClassName('boxes');

    while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }

    numberOfBoxes();

    createBoxes(squaresPerSide);

}

);
//console.log("btn clicked");


