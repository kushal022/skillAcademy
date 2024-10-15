//------------- Callback:
function hello(callback) { // here "hello" is High Order Function(HOF).
    console.log('Hello..')
    callback()  // this is callback function.
    // callback function run after complete the task.
    // here console.log('hello..) is the task and callback() is callback function which
}

hello(world)

function world() {
    console.log('World')
}

console.log('--------------- Callback Hell ----------------')
// Callback Hell:
// Nested callback functions, called Callback Hell

function main() {
    console.log('first')
    setTimeout(function () {
        console.log('second');
        setTimeout(function () {
            console.log('third');
            setTimeout(function () {
                console.log('four')
            }, 1000)
        }, 1000)
    }, 1000)
};

// main()


// Problem: not readable, Debugging hard, Error pron

// Solution: Promise, Asynch/Await

// Promise: state:- 1. Pending, 2. FulFill, 3. Rejcted
//  Pending:   state before fulfill event complete.
//  FulFill:   state After event complete.
//  Rejected:  Fail


//JS:
//1. synch: one  by one line/wait, Handel by callstack [ Last IN, First Out :-- LIFO ]
//2. Asynch: Depend on event/ run after event / AJAX , Handel by Event Queue [First In First Out :-- FIFO]


var deliveryPromise = new Promise(function (resolve) {
    console.log('Waiting for video game, give fast....');
    setTimeout(function () {
        resolve('Got the video game...!1!')
    }, 2000)
})

console.log(deliveryPromise)
deliveryPromise.then(function (msg) {
    console.log(msg)
})