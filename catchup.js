/**
 * Created by mwanjajoel on 25/06/2017.
 */

//normal JS function
function sayHi() {

    //print a message in the browser console
    console.log("Hi There my name is NodeSprint");

}

//then we call the function
sayHi();


//using a Function Expression in Node JS
var sayBye = function () {

    console.log("Bye Bye");

};

//then we call it
sayBye();

//We can also call a function in another function, like So
function callAnotherFunction(fun) {

    fun();

}

//then we use it
callAnotherFunction(sayBye);

//random
var counter = function (arr) {

    return "There are " + arr.length + " in this array";

};

console.log(counter(["Joel", "Rhona", "Essy"]));

//then we make the counter function available to all files in this Node JS app
module.exports = counter();