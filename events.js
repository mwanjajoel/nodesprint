/**
 * Created by mwanjajoel on 25/06/2017.
 */

var events = require("events");
var util = require("util");

var Person = function (name) {

    this.name = name;

}

//Person inherits the Events Emitter class
util.inherits(Person, events.EventEmitter);

//create objects from the Person class
var james = new Person("James");
var mary = new Person("Mary");
var peter = new Person("Peter");

//we then put them in an array
var people = [james, mary, peter];


//and loop through the array attaching events
