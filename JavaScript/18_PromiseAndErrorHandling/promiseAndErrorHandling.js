// ======================= Promises & Error Handling
// Topics Covered:
// ● Promises
// ● Error Handling

// Topics in Detail:
//-------------------------- Promises:

// ● Asynchronous operations in JavaScript are handled using promises.
// ● Multiple asynchronous operations can make the code unmanageable by creating 
//   callback hell. Promises can easily manage this situation.
// ● Events and callback functions are used to handle asynchronous operations before
//   promises, but they had limited functionalities making the code unmanageable.
// ● Callback hell created by multiple callback functions make the code unmanageable.
// ● Multiple callbacks at the same time are not easy to handle.
// ● Promises can handle multiple asynchronous operations easily.
// ● They can handle multiple callbacks at the same time, avoiding a callback hell situation.
// ● Promises improve the code readability in the most effective and efficient manner.

//------------------------ Benefits of promises:
// ● ImprovesCode Readability
// ● Better handling of asynchronous operations
// ● Better flow of control definition in asynchronous logic
// ● Better Error Handling 'States' of Promises: 
//       1. fulfilled: Promise issucceeded
//       2. rejected: Promise is failed
//       3. pending: Promise is still pending,i.e. not fulfilled or rejected yet
//       4. settled: Promise has fulfilled or rejected

//------------------------- Create a promise using the promise constructor:
// Syntax:
/*
        var promise = new Promise(function(resolve, rejected){
            //do something
        })
*/

// Parameters:
// ● The promise constructor can have only one argument,which is a callback function.
// ● The callback function can take two arguments 
//    ○ resolve
//    ○ reject
// ● If the operations inside a callback function performed well, then call resolve.
// ● If not performed well then call reject.

var promise = new Promise(function (resolve, reject) {
    const x = 'Js Prolmises';
    const y = 'Js Prolmises';
    if (x === y) {
        resolve();
    } else {
        reject();
    };
});
// now what should happen once the promise seccess or unsecces or whatever
promise.then(function () {
    console.log('This is rsolve');
}, function () {
    console.log('This is reject')
    // throw new Error('err')
}).catch(function () {
    console.log('Some error has occured');
});

// Output: This is rsolve

//------------------------- Promise Consumers--------------------------
// ● Promises can be consumed by using '.thenand' '.catch' methods.
// ● then()
// ● When a promise is either resolved or rejected,then() is invoked.
//   It acts as a career taking data from the promise and further executes it successfully.

//------------------------- Parameters: then()
// ● then() :has two functions as parameters
// ● If the promise is resolved and the result is received, then the first function will be executed.
// ● If the promise is rejected and an error is received, then the second function will be executed.
// ● Syntax:
/*
            .then(function(result){
                    //handle success
            }, function(error){
                    //handel error
            })
*/

// ● then(): When a promise is either rejected or if some error has occurred,
//            then() is invoked. If there is any chance of getting an error,
//            it is used as an Error handler.

// -------------Parameters: catch()
// ● catch(): has one function as parameters
// ● If the promise is rejected or the error has occurred,then the function can handle it.
// Syntax: 

/*
            .catch(function(error){
                    //handle success
            })
*/

//----------Applications
// ● To handle asynchronous events, promises are used.
// ● To handle asynchronous http requests, promises areused.

// =================================== Error Handling ======================
// ● Errors will definitely occur while executing JavaScript code.
// ● Error can occur in the following situations 
//   ○ When there is a fault from the programmer side
//   ○ When the input is wrong
//   ○ When there is a problem with the logic of the program
// ● Using the below five statements, we can solve the errors
//   ○ try :- Check for errors in a block of code.
//   ○ catch :- Handles the error if there are any
//   ○ throw :- lets you make your own error
//   ○ finally :- Execute the code after try and catch
// ● This block of code will run regardless of the result of the try-catch block.
// ● Example:
//      try {
//          dadalert('Welcome !!')
//      }
//      catch (err) {
//          console.log(err)
//      }
// ● Dadalert is not a reserved keyword and neither it is defined, hence we get an error.
// Output: dadalert is not defined

// -------------- Try and catch block:
// ● The try statement will let you check whether there is an error in a specific block of code.
// ● The catch statement will display the error if there is any in the try block.
// ● Syntax:
/*
        try{
               // try block to check for errors.
        }
        catch(err){
               // catch block to display errors.
        }
*/


//--------------Throw
// ● JavaScript will stop and generate an error message when any error occurs. 
//   The throw statement will allow us to create any custom-made errors.

// try {
//     // throw new Error('Yeah....Sorry this is error')
// }
// catch (e) {
//     console.log(e);
// }
// ● Output: Error: Yeah....Sorry this is error

//--------------------- Finally Block
// ● After the execution of try/catch block, the finally block runs unconditionally.
// ● Syntax:
/*
        try{
               // try block to check for errors.
        }
        catch(err){
               // catch block to display errors.
        }
        finally {
                // finally block executes regardless of the try / catch result.
        }       
*/

// ● Example:
try {
    console.log('try');
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}
// ● Output:
// try
// finally
