// ---------------- Async & Sync ---------------------
// Topics Covered:
// ● Synchronous JavaScript
// ● Asynchronous JavaScript
// ● Memory Allocation
// ● Function call stack
// ● Event Loop
// ● Callback Hell

console.log('---------------- Synchronous JavaScript ---------------------')
//-------------- Synchronous JavaScript:
// ● Every statement in a code is executed in a sequence,one after the other.
// ● Every statement will wait for one statement to complete execution.
// ● JavaScript is a single-threaded synchronous programming language.
// ● The JavaScript code does not run in parallel, but it can only run one at a time.

//Example:
// console.log('Before delay');
// function delayBySec(sec) {
//     // let start = now = Date.now()
//     let start = Date.now()
//     let now = Date.now()
//     while (now - start < (sec * 1000)) {
//         now = Date.now();
//     }
// }
// delayBySec(5);
// console.log("After Delay")

// Output:
//Before delay
//(.... waits for 5 sec)
//After delay

console.log('---------------- Asynchronous JavaScript ---------------------')
//------------------ Asynchronous JavaScript:
// ● The program will be executed immediately in asynchronous code. ( Does not wait )
// ● Many operations can be performed simultaneously in AJAX.

//Example:
// console.log("HI")

// setTimeout(() => {
//     console.log("Let us see what happens");
// }, 2000);

// console.log("End") //it's run not wait for setTimeout()

//Output
//HI
//End
//Let us see what happens

// ● At first, HI statement will get logged.
// ● Then, JavaScript passes setTimeout function to web API and rest of the code will be executed.
// ● After executing all the code, the setTimeout function is pushed to the callstack and finally gets executed.

console.log('---------------- Memory Allocation ---------------------')
//------------------ Memory Allocation:
//------------ Heap Memory:
// ● The data will be stored randomly and memory is also allocated in the same manner.

//------------ Stack Memory:
// ● The memory will be allocated in the form of a stack. In case of functions, stack memory is used.
// ● it is LIFO structure (Last In First Out), (bottom --> top)
// ● function are stored in it only.



//-------------- Function call stack:
// ● The function stack is a function which keeps track of all the functions that are executed during the run time.
// ● When an error is occurred, we can see a function stack being printed at that time.
// ● The function gets popped out of stack after the function’s purpose gets over.

function first() {
    second()
    console.log('First')
}
function second() {
    third()
    console.log('Second')
}
function third() {
    four()
    console.log('Third')
}
function four() {
    console.log('Four')
    // throw new Error('hello Error');
}
// first();
//Output:  four-> third-> second-> first
/*
// when throw an error-- we can see function stack.
async.js:89
 Uncaught Error: hello Error
    at four (async.js:89:11)
    at third (async.js:84:5)
    at second (async.js:80:5)
    at first (async.js:76:5)
    at async.js:91:1
four	@	async.js:89
third	@	async.js:84
second	@	async.js:80
first	@	async.js:76
(anonymous)	@	async.js:91
*/


//--------------- Event Loop:
// ● Whenever a 'function stack' is empty, the event loop pulls the stuff out of queue and places it over the 'function stack'.
// ● The event loop gives the 'illusion of multithreaded'.
// ● The 'callback' is in the 'event queue' is waiting for its turn in the stack to run when setTimeout() is being executed.
//   When the function stack becomes empty, it is loaded to the stack.
// ● The first event from the event queue is now being placed on the stack. This cycle is called event loop
//   and this is how JavaScript handles events.

//------------------ Callback Hell:
// ● The code with complex nested callbacks will cause a big issue called Callback Hell.
// ● The result of the previous callback is taken up by the upcoming callbacks.
// ● The code structure will look like a pyramid.
// ● It is difficult to read and maintain.
// ● If anyone function has an error, it will affect all the other function.

//---------------- How to avoid callback hell?
// ● InJavaScript, event queue and promises help to escape from a callback hell.
// ● Any asynchronous function will return an object called promise.
//   A callback method can be added to apromise.
// ● .then() method is used by promises to call async callbacks.
//   As many callbacks can be chained together. The order of the callbacks is also strictly maintained.
// ● Promise uses:
//    ○ .fetch() method to fetch an object from the network.
//    ○ .catch() method to catch any exception when any block fails.
// ● The subsequent JS code doesn’t block if these promises are put in event queue.
//   The event queue finishes its operations once the results are returned.
// ● The keywords and methods like async, wait, setTimeout() are used to simplify and make callbacks used better.

//============================== Async/Await ==============================
console.log('====================== Async/Await ===============================');
//========== Async:
// o To make a function 'return a promise', add an 'async' keyword before a function.
/*
     syntax:
        async function name(params) {

        }

        // same as: Promise------------------
        function myfunction(){
            return Promise.resolve('Hello');
        }

        // how to use a promise:

        myfunction().then(
            function(value){ code if succesful },
            function(error){ code if some error}
        );

*/

// Example 1:
// async function myFun() {
//     return "Hello";
// };
// myFun().then(
//     function (value) { console.log(value); },
//     function (error) { console.log(error); }
// );

// Example 2:
// async function myFun2() {
//     // throw new Error('This is Error message !! ')
//     return "Hello 2nd"
// }

// function success(value) {
//     console.log('It is successful :' + value)
// }
// function err(value) {
//     console.log('It is error ' + value)
// }

// myFun2().then(success, err);

// Example 3: if wait
// console.log("Before Execution")
// async function myFun2(second) {
//     let date = new Date();
//     let now = new Date();
//     while (now - date < second * 5000) {
//         now = new Date();
//     }
//     return "Hello 2nd"
// }

// function success(value) {
//     console.log('It is successful :' + value)
// }
// function err(value) {
//     console.log('It is error ' + value)
// }

// myFun2().then(success, err);
// console.log("After Execution")
// now it is not wait, ( Async)

//========== Await:
//o To make a function wait for a promise, add await keyword before a function.
//o 'Await' keyword can be used only within an async function.
// syntax:
//   let value = await promise;

async function myFun3() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve('This is resolved');
    })

    let k = await myPromise;
    console.log(k);
}
myFun3()