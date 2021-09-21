document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").onsubmit = function(){
        let wight=document.querySelector("#wight").value;
        let hight=document.querySelector("#hight").value;
        let tall=hight * hight / 10000;
        let bim=wight / tall;
        if (bim < 18.5) {
            document.querySelector("#bim").innerHTML = "Your BMI Is Under Wight";
        }
        else if (bim > 18.5 && bim < 24.9) {
            document.querySelector("#bim").innerHTML = "Your BMI Is Normal";
        }
        else if (bim > 24.9) {
            document.querySelector("#bim").innerHTML = "Your BMI Is Over Wight";
        }
        return false;
    };
    });