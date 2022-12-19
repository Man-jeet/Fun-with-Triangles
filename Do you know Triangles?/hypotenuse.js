const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#hypotenuse-btn");
var outputE1 = document.querySelector("#output");

calculateBtn.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquare(
        Number(sides[0].value),
        Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        console.log(lengthOfHypotenuse)
        output.innerText = "The length of hypotenuse is " + String(lengthOfHypotenuse);
    }

function calculateSumOfSquare(a,b){
    const sumOfSquares = a**2+b**2;
    return sumOfSquares;
}