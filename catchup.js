/**
 * Created by mwanjajoel on 25/06/2017.
 */

let events = require("events");

//normal JS function
function sayHi() {

    //print a message in the browser console
    console.log("Hi There my name is NodeSprint");

}

//then we call the function
sayHi();


//using a Function Expression in Node JS
let sayBye = function () {

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
let counter = function (arr) {

    return "There are " + arr.length + " in this array";

};

console.log(counter(["Joel", "Rhona", "Essy"]));

//then we make the counter function available to all files in this Node JS app
module.exports = counter;


//moving on to Node JS Events

//declare an events emitter object
myEventsEmitter = new events.EventEmitter();

//attach a function once the event is emitted.
myEventsEmitter.on('someEvent', function (message) {

    //log it to the browser console
    console.log(message)
});

//then we emit the event with a message parameter for the function.
myEventsEmitter.emit('someEvent', 'Hi this is an event that has been emitted');



















