


var ramadanDate = new Date('2024-03-10'); 

function calculateRemainingTime() {
 
var now = new Date();

  
var  timeDifference = ramadanDate - now;
  
var days = Math.floor(timeDifference/(1000 * 60 *60 * 24 ));

var hours =Math.floor(timeDifference%(1000 * 60 *60 * 24 )/(1000 * 60 *60));

var minutes =Math.floor(timeDifference%(1000 * 60 *60 )/(1000 * 60));

var seconds =Math.floor(timeDifference%(1000 * 60 )/(1000));
 
return{days, hours, minutes, seconds}

}


var remaininTime = calculateRemainingTime();
document.write("<br />")
document.write("<h2>RAMADAN COMING DOWN</h2> <br /> ");
document.write(  remaininTime.days + "<h3>Days</h3>" +"<br />");
document.write(  remaininTime.hours + "<h3>Hours</h3>" +"<br />");
document.write(  remaininTime.minutes +"<h3>Minutes</h3>" + "<br />");
document.write(  remaininTime.seconds + "<h3>Seconds</h3>" + "<br /><br />");
document.write("<h2>BY: MUSADIQUE MUSLIM</h2>")

