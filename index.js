const keys = document.querySelectorAll('.key');
const display = document.querySelector('.display')
keys.forEach(key=>key.addEventListener('click',onClick));

function isOperator(value){

     if(value=='+'||value=='-'||value=='*'||value=='/'||value=='='){
        return true;
     }

     return false;
}

function onClick(){

    if(isOperator(this.innerText)){
       if(display.innerText.length>0&&!lastDigitisOperator()){
            display.innerText = eval(display.innerText);
            if(this.innerText!='=')
             display.innerText += this.innerText;
       }
}
 else if(this.innerText=='CE'){
      display.innerText = '';
 }
 else {
       display.innerText += this.innerText;
      
 }
  

}

function lastDigitisOperator(){

let lastDigit = display.innerText[display.length-1];

if(isOperator(lastDigit))
return true;
return false;



}

