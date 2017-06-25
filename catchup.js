/**
 * Created by mwanjajoel on 25/06/2017.
 */
//addition of modules needed
let events = require("events");
let util = require("util");

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
/** myEventsEmitter = new events.EventEmitter();

 //attach a function once the event is emitted.
 myEventsEmitter.on('someEvent', function (message) {

    //log it to the browser console
    console.log(message)
});

 //then we emit the event with a message parameter for the function.
 myEventsEmitter.emit('someEvent', 'Hi this is an event that has been emitted'); **/

//new class object called Person that takes in a name Parameter
let Person = function (name) {

    this.name = name;

};

//using the Utility function for the Person class to inherit the EventsEmitter class
util.inherits(Person, events.EventEmitter);

let james = new Person("James");
let mary = new Person("Mary");
let essy = new Person("Essy");

//create an array to hold the variables for the Person class above
let people = [james, mary, essy];


//we then loop through each person's name and attach an event emitter to each of them under the person parameter
people.forEach(function (person) {

    person.on('speak', function (message) {

        //we then print the message in the console
        console.log(person.name + "said: " + message);

    });

});

//we then emit
james.emit('speak', 'Hey Guys!');
mary.emit('speak', 'Hiii, I am Mary');
essy.emit('speak', 'Hello I am Esther');





















