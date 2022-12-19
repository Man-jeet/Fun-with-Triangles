const angleSides = document.querySelectorAll("input");
const calculate = document.querySelector("#calculate-btn");
const output= document.querySelector("#output")

calculate.addEventListener("click",calculateArea);



function calculateArea(){
    const area = 
    sumOfSides(Number(angleSides[0].value),
    Number(angleSides[1].value));
    var areaOfTriangle = ((1/2)*area)
    
    output.innerText="The area of the triangle is "+ String(areaOfTriangle)+"cm²"
}

function sumOfSides(){
    return Number(angleSides[0].value) * Number(angleSides[1].value)
}
