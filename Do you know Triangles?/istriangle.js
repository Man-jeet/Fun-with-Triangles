var inputs = document.querySelectorAll(".angle-input"); 
var isTriangleBtn = document.querySelector("#is-triangle");
var outputA1 = document.querySelector("#output");

isTriangleBtn.addEventListener("click",isTriangle)

function isTriangle(){
    const sum = calculateSumOfAngles(
        Number(inputs[0].value),
        Number(inputs[1].value),
        Number(inputs[2].value)
    )
    if(sum===180){
        outputA1.innerText="Yay, The angles form a triangle"
    }else{
        outputA1.innerText="oh! The angles don't form a triangle"
    }
}

function calculateSumOfAngles(angle1,angle2,angle3){
    var sum = angle1 + angle2 + angle3
    return sum;
}
