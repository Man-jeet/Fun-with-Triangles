const angleSides = document.querySelectorAll("input");
// console.log(angleSides)
const calculate = document.querySelector("#calculate-btn");
const output= document.querySelector("#output")

calculate.addEventListener("click",calculateArea);



function calculateArea(){
    let side1  = Number(angleSides[0].value);
    let side2 = Number(angleSides[1].value);
    // console.log(typeof side1)
    if (side1 > 0 && side2 > 0){
        let areaOfTriangle = ((1/2)*side1* side2)
        output.innerText="The area of the triangle is "+ String(areaOfTriangle)+"cm²"
    }
    else{
        output.innerText = "Enter the positive value "
    }
    
}
