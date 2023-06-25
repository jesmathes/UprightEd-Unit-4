/* 

Promise is an object that may produce a cingular value in the future
    3 states:
        - pending
        - fulfilled
        - rejected

    Takes in two parameters:
        - Resolve
        - Reject
    
    Always returns an object
*/

// function getData() {
//     setTimeout(() => {
//     // console.log(`data`);
//     return "some data";
//     }, 3000);
// }

// let data = getData(); //the value comes "late" - 3 seconds
// console.log(data); //We get an undefined because the info is delayed when compiled.

// Callback - functions that get executed after the end of a process.
function getData(cb) {
    setTimeout(() => {
    cb("some data");
    }, 3000);
}

getData(data => console.log(data));


getData(data => {
    let newString = data + " ...and more data...";
    console.log(newString);

});

/* 
A promise is an object that prodice a cingular value in the future.

-Resolve
-Rejectd
    -These detail what to do depending on the results.
*/

function returnData() {

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(true) {
                resolve('some data from Promise');
            } else {
                reject(`this is rejected`);
            }
        }, 2000);
    });

}

console.log(returnData());

// when returned, the returnData() function will give us a string instead of a Promise Object.

    // - Chained with a resolver
    // - Keyword:
    //     - .then() - if successful
    //         - can be chained together
    //     - .catch() - if there is an error
    //     - Take in CB functions
    //     - note: only put semicolor (;) after the LAST resolver.

returnData()
.then(data => console.log("from response: ", data))
.then(num => {
    console.log(typeof data)
    console.log(3 + data)
})
.catch(function(err) {
    console.error(err); //provides rejection result (set to false from true)
})

/* 
The Process:
    -Creating a new Promise.
        - resolve / reject are parameters od a cb function.
    - setTimeout acting as our "waiting" for a response.
    - resolve() or reject() said promise
    - When returned, returns a promise - not a string
    - use of resolvers (.then() / .catch()) with cb function to help extrapolate the info from that promise.
     */