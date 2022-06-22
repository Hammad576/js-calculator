//Did the below console.log so I could see the script being executed
console.log('Hello world')

// I thought I could store all that is clicked in this array
const inputStorage = [];

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
//Apply a action to the element using a click in this instance.
//My thought process is add the clicked element to the new display and add it to the array 
const numberOneAction = numberOneElement.addEventListener("click", () => {
    inputStorage.push('1'); 
    calcDisplay.value='1';
});
const numbertwoAction = numbertwoelement.addEventListener("click", () => {
    inputStorage.push('2');
    calcDisplay.value='2';
});
const numberthreeAction = numberthreeelement.addEventListener("click", () => {
    inputStorage.push('3');
    calcDisplay.value='3';
});
const numberfourAction = numberfourelement.addEventListener("click", () => {
    inputStorage.push('4');
    calcDisplay.value='4';
});
const numberfiveAction = numberfivelement.addEventListener("click", () => {
    inputStorage.push('5');
    calcDisplay.value='5';
});
const numbersixAction = numbersixelement.addEventListener("click", () => {
    inputStorage.push('6');
    calcDisplay.value='6';
});
const numbersevenAction = numbersevenlement.addEventListener("click", () => {
    inputStorage.push('7');
    calcDisplay.value='7';
});
const numbereightAction = numbereightelement.addEventListener("click", () => {
    inputStorage.push('8');
    calcDisplay.value='8';
});
const numbernineAction = numbernineelement.addEventListener("click", () => {
    inputStorage.push('9');
    calcDisplay.value='9';
});

console.log(inputStorage);


// Try and use the above to get something working
// Dont worry about getting the application to work fully. Small steps are better.
// Try and draw or write out what you are trying to do and than do it
// For variables use const unless you have to use let
