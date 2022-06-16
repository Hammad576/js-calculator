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
//Apply a action to the element using a click in this instance.
//My thought process is add the clicked element to the new display and add it to the array 
const numberOneAction = numberOneElement.addEventListener("click", () => {
    inputStorage.push('1');
    TestDisplay.innerHTML = "<h1>1</h1>";
});

console.log(inputStorage);


// Try and use the above to get something working
// Dont worry about getting the application to work fully. Small steps are better.
// Try and draw or write out what you are trying to do and than do it
// For variables use const unless you have to use let
