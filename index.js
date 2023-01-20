const keys = document.querySelectorAll('.key');
const display = document.querySelector('.display')
keys.forEach(key=>key.addEventListener('click',onClick));

let numbers = []
let operators = []
let numberIndex = 0;


function onClick(){

    if(isOperator(this.innerText)){
        handleOperator(this.innerText);
 }
 else if(this.innerText=='.'){
    handleDecimal();
 }
 else if(this.innerText=='CE'){
      handleCE();
 }
 else if(this.innerText=='='){
    handleEqual();
 }
 else {
       handleNumber(this.innerText);
      
 }
  

}

//when an operator key is pressed on the calculator
function handleOperator(operator){
    
   if(lastDigitIsOperator())
   return;

   operators.push(operator);
    numberIndex++;
    console.log(numberIndex);
  addToDisplay(operator);
  
}

function handleDecimal(){
    
    if(numbers.length==numberIndex){
        numbers[numberIndex]='0.'
        addToDisplay('0.')
    }
    else if(currNumHasDecimal())
    return;
    else{
          numbers[numberIndex] += '.';
          addToDisplay('.');
    }
      
   
}

//When a digit key is clicked on the calculator
function handleNumber(num){

  if(numbers.length==numberIndex)
  numbers[numberIndex] = num;
  else{
   numbers[numberIndex] += num;
  }
   addToDisplay(num);
}

function handleCE(){
    display.textContent='';
    numbers = [];
    operators=[];
    numberIndex = 0;
}

function handleEqual(){
  if(lastDigitIsOperator())return;
  if(display.innerText.length==0)return;
  if(operators.length==0)return;
  let ans = calculate(); 
   handleCE();
  addToDisplay(ans);
  numbers[numberIndex] = ans;
  
}

function isOperator(value){

    if(value=='+'||value=='-'||value=='*'||value=='/'){
       return true;
    }

    return false;
}

function lastDigitIsOperator(){

let lastDigit = display.innerText[display.length-1];

if(isOperator(lastDigit))
return true;
return false;



}

function currNumHasDecimal(){

    if(numbers[numberIndex].includes('.'))
    return true;
    return false;


}

function addToDisplay(value){
    display.textContent += value;
}

function calculate(){
   
let ans = Number(numbers[0]);
for(let operatorIndex=0;operatorIndex<operators.length;operatorIndex++){
    console.log(numbers[operatorIndex+1])
    let nextNumber = Number(numbers[operatorIndex+1]);

    switch(operators[operatorIndex]){

         case '+':
            ans += nextNumber;
            break;
        case '-':
            ans -= nextNumber;
            break;
        case '*':
            ans *= nextNumber;
            break;
        case '/':
            ans /= nextNumber;
            break;
           



    }
  
}
return ans.toString();
}

