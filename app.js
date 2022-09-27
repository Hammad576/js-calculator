//Did the below console.log so I could see the script being executed
console.log('Hello world')

// I thought I could store all that is clicked in this array
var inputStorage='' ;
var token=0;

//The below is me getting the display. It actually isnt a display its an inputr field. Maybe change this to a display of some sort
const calcDisplay = document.getElementById("screen");
//An example of me using or creating a display
const TestDisplay = document.getElementById("testScreen");

//An example of me getting a element to than later apply a action to it. Number one is the exmaple here. Dont forget to add a ID to the html element
const numberOneElement = document.getElementById("one");
const numbertwoelement=document.getElementById("two");
const numberthreeelement=document.getElementById("three");
const numberfourelement=document.getElementById("four");
const numberfivelement=document.getElementById("five");
const numbersixelement=document.getElementById("six");
const numbersevenlement=document.getElementById("seven");
const numbereightelement=document.getElementById("eight");
const numbernineelement=document.getElementById("nine");
const numberzero=document.getElementById("zero");
const clear=document.getElementById("clear");
const addition=document.getElementById('plus');
const multiply=document.getElementById('multiply');
const divide=document.getElementById('divide');
const equal=document.getElementById('equal');
const minus=document.getElementById('minus');

//Apply a action to the element using a click in this instance.
//My thought process is add the clicked element to the new display and add it to the array 
const numberOneAction = numberOneElement.addEventListener("click", () => {
    
    inputStorage=inputStorage.concat('1');
     
    calcDisplay.value+='1';
});
const numbertwoAction = numbertwoelement.addEventListener("click", () => {
    inputStorage=inputStorage.concat('2');
     
    calcDisplay.value+='2';
});
const numberthreeAction = numberthreeelement.addEventListener("click", () => {
    inputStorage=inputStorage.concat('3');
     
    calcDisplay.value+='3';
});
const numberfourAction = numberfourelement.addEventListener("click", () => {
    inputStorage=inputStorage.concat('4');
     
    calcDisplay.value+='4';
});
const numberfiveAction = numberfivelement.addEventListener("click", () => {
    inputStorage=inputStorage.concat('5');
     
    calcDisplay.value+='5';
});
const numbersixAction = numbersixelement.addEventListener("click", () => {
    inputStorage=inputStorage.concat('6');
     
    calcDisplay.value+='6';
});
const numbersevenAction = numbersevenlement.addEventListener("click", () => {
    inputStorage=inputStorage.concat('7');
    calcDisplay.value+='7';
});
const numbereightAction = numbereightelement.addEventListener("click", () => {
    inputStorage=inputStorage.concat('8');
    calcDisplay.value+='8';
});
const numbernineAction = numbernineelement.addEventListener("click", () => {
    inputStorage=inputStorage.concat('9');
    console.log(inputStorage);
    calcDisplay.value+='9';
});
const additionaction = addition.addEventListener("click", () => {
     document.getElementById('screen').value = '';
     num1=Number(inputStorage);
     inputStorage='';
      token=1;
});
const zeroaction = numberzero.addEventListener("click", () => {
    inputStorage=inputStorage.concat('0');
    console.log(inputStorage);
    calcDisplay.value+='0';
});
const multiplyaction = multiply.addEventListener("click", () => {
    document.getElementById('screen').value = '';
    num1=Number(inputStorage);
     inputStorage='';
      token=2;
});
const divideaction = divide.addEventListener("click", () => {
    document.getElementById('screen').value = '';
    num1=Number(inputStorage);
     inputStorage='';
      token=3;
});
const equalaction = equal.addEventListener("click", () => {
    document.getElementById('screen').value = '';
    num2=Number(inputStorage);
    if (token==1){
        sum=num1+num2;
    calcDisplay.value=sum;
    inputStorage='';
    inputStorage=inputStorage.concat(sum);
    }
    if (token==2){
        let multiply=num1*num2;
    calcDisplay.value=multiply;
    inputStorage='';
    inputStorage=inputStorage.concat(multiply);
    }
    if (token==3){
       let  divide=num1/num2;
    calcDisplay.value=divide;
    inputStorage='';
    inputStorage=inputStorage.concat(divide);
    }
    if (token==4){
      let  minus=num1-num2;
    calcDisplay.value=minus;
    inputStorage='';
    inputStorage=inputStorage.concat(minus);
    }
     
});
const minusaction = minus.addEventListener("click", () => {
    document.getElementById('screen').value = '';
    num1=Number(inputStorage);
     inputStorage='';
      token=4;
});
const clearaction = clear.addEventListener("click", () => {
    document.getElementById('screen').value = '';
    inputStorage='';
});
console.log(inputStorage);


// Try and use the above to get something working
// Dont worry about getting the application to work fully. Small steps are better.
// Try and draw or write out what you are trying to do and than do it
// For variables use const unless you have to use let
