
//Global variables
var getBtn, getNum;
var storeInput 
var operatorSymbol ;

getUserInput(); 
//Get btn values and add listenr event
function getUserInput(){
    getBtn = document.querySelectorAll(".btn");
    getNum = document.querySelector(".numHolder");
   for(var i = 0; i <getBtn.length; i++){
       getBtn[i].addEventListener('click',clickHandle);
   }

 
}


function clickHandle(){
    
        console.log(this.innerHTML);

        
        if (this.innerHTML === "+" || this.innerHTML === "-" || this.innerHTML === "*" || this.innerHTML === "/") {
            storeInput = getNum.value;
            operatorSymbol = this.innerHTML;
            getNum.value = "";
        } else if (this.innerHTML === "=") {
            getResult();
        } else if (this.innerHTML === "c") {
            clear();
        }else if(this.innerHTML === "."){
            //console.log(this.innerHTML);
            
            //storeInput = getNum.value;
            //operatorSymbol = this.innerHTML;
            getNum.value += '.';
        }

        else {
            getNum.value = Number(getNum.value + this.innerHTML);
        }

    }

// clear for btn -> "c"
function clear(){
    getNum.value = "0";
    storeInput = 0;
    operatorSymbol = "";
}


function getResult(){
    
    switch(operatorSymbol){
        
        case "+":
            getNum.value = Number(storeInput) +Number(getNum.value);
            
            break;
        case "-":
            getNum.value = Number(storeInput) - Number(getNum.value);
            break;
        case "*":
            getNum.value = Number(storeInput) * Number(getNum.value);
            break;
        case "/":
            getNum.value = getNum.value == 0? "Wrong Input!":Number(storeInput) / Number(getNum.value);
    }   

    
}