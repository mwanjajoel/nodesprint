/**
 * Created by mwanjajoel on 25/06/2017.
 */

var time = 0;

//set a timer variable that runs a setInterval time function using the Function Expression technique in Node JS
var timer = setInterval(function () {

    time += 2;

    console.log(time + " seconds have passed");

    //check whether the time is more than 10 seconds
    if (time > 10) {

        //if it is, then we clear the timer thus stopping the function.
        clearInterval(timer);
    }

}, 2000);