const base  = document.querySelector("#base");
const height  = document.querySelector("#height");
const calculateBtn = document.querySelector("#hypotenuse-btn");
var outputE1 = document.querySelector("#output");

calculateBtn.addEventListener("click",calculateHypotenuse);

function calculateHypotenuse(){
    let base_len  =  base.value
    let height_len = height.value
    if (base_len == 0){
        output.innerText = "Enter the value of base "
        // console.log(base_len , height_len)
    }
    else if (height_len == 0){
        output.innerText = "Enter the value of height"
    }
    else{
        if (base_len > 0 && height_len > 0){
            let result = base_len**2 + height_len**2 
            outputE1.classList.add("color")
            output.innerText = "The length of hypotenuse is " + (result**0.5) + "cm";
        }
        else{
            output.innerText = "Enter the positive values "
        }
    }
}
