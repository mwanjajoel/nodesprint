/**
 * Created by mwanjajoel on 25/06/2017.
 */

//this is a function that returns the number of elements in a given array
let theCounter = function (arr) {

    return "The array has " + arr.length + " elements in it";
};

let theAdder = function (a, b) {

    return `The sum of both numbers is ${a + b}`;

};

//prepare the different functions for export
module.exports.theCounter = theCounter;
module.exports.theAdder = theAdder;

