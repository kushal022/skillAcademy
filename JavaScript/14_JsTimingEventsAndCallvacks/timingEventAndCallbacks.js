//Js Timing Event And Callbacks
// Topics Covered:
// ● Timing Events
// ● setTimeout() Method
// ● setInterval() Method
// ● Function Sequence
// ● JavaScript CallBack

// Topics in Detail:
console.log('----------------------------Timming Events ------------------------------')
//----------- Timing Events:
// ● At specified time intervals, the window object allows code execution.
// ● 'Timing Events' are nothing but these 'time intervals'.
// ● The two key methods are
//      ○ setTimeout(function, milliseconds)
//      ○ setInterval(function, milliseconds)

console.log('----------------------------setTimeout() method ------------------------------')
//------------ setTimeout() method:
// The function is executed after waiting for certain milliseconds.
// Syntax: window.setTimeout(function, milliseconds);
//      ● The window prefix can be omitted.
//      ● The first parameter has the function to be executed.
//      ● Thesecond parameter has the wait time before execution in milliseconds.

let count = 0;
function counter() {
    console.log(count++)
}
let btn1 = document.querySelector('#btn1');
let timeout;
// btn1.addEventListener("click", counter);
btn1.addEventListener("click", () => {
    console.log('setTimeout started');
    timeout = setTimeout(counter, 3000)
});



// How to 'stop' the execution?
// ● To stop the function execution, use the clearTimeout().
//          window.clearTimeout(timeoutVariable);
// ● The window prefix can be omitted.
// ● The variable returned from setTimeout() method is used in the clearTimeout() method.

let btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", () => {
    console.log('setTimeout stoped or clearTimeout')
    clearTimeout(timeout)
})

console.log('---------------------------- setInterval() method ------------------------------')
// ------------ setInterval() Method
// ● The function is executed repeatedly after a given time interval.
// Syntax: window.setInterval(function, milliseconds);
// ● The window prefix can be omitted.
// ● The first parameter has the function to be executed.
// ● The second parameter has the time interval between each execution.

let btn2 = document.querySelector('#btn2');
let interval;
btn2.addEventListener("click", function () {
    console.log('setInterval started');
    interval = setInterval(counter, 1000);
});



// How to stop the execution?
// ● To stop the function execution, use the clearInterval().
//      window.clearInterval(timerVariable);
// ● The window prefix can be omitted.
// ● The variable returned from setInterval() method is used in the clearInterval() method.

// let btn4 = document.querySelector('#btn4')
btn4.addEventListener("click", function () {
    console.log("setInterval stoped or ClearInterval");
    // let timer = setInterval(counter, 3000);
    clearInterval(interval)
})

console.log('---------------------------- Function Sequence ------------------------------')
//-------------------- Function Sequence
// ● The functions in JavaScript are executed in the sequence they are called.
// ● It is better to have control over the function execution.
// ● To control the sequence of function execution, we go for JavaScript callbacks.
function display(msg) { console.log(msg) };

function first() {
    display('Hello this is first function')
}
function second() {
    display('Hi!!.. this is second function')
}

second()
first()
// output:
//1.        Hi!!.. this is second function
//2.        Hello this is first function

console.log('---------------------------- CallBacks ------------------------------')
// --------JavaScript Callbacks
// ● When a function is passed as an argument to another function, it is called a callback.
// ● Callback functions are used in the case of 'asynchronous or asynch' functions, where one function waits for another function.

function myDisplay(sum) {
    console.log(sum);  // 7
}

function calc(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum)
};

calc(5, 2, myDisplay)

//-----------------
// this example is not a callback;
function main() {
    display('Main is called')
    next()
}
function next() {
    display('Next is called')
}

main()

// this is callback:
function main1(next) {
    display('Main-1 is called')
    next()
}
function next1() {
    display('Next-1 is called')
}
function next2() {
    display('Next-2 is called')
}

main1(next1);
main1(next2);

