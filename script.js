/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}


document.addEventListener('DOMContentLoaded', function() {
  
  const clock_elems = {
    "hourTen": document.getElementById("hour-ten"),
    "hourOnes": document.getElementById("hour-ones"),
    "minuteTen": document.getElementById("minute-ten"),
    "minuteOnes": document.getElementById("minute-ones"),
    "secondTen": document.getElementById("second-ten"),
    "secondOnes": document.getElementById("second-ones")
  }
  
  const colors = {
    0: "#111",
    1: "#ddd",
    2: "#3294e5",
    3: "#edf41f",
    4: "#e847e2",
    5: "#f4681d",
    6: "#5b370d",
    7: "#58d363",
    8: "#e2bd16",
    9: "#3a3b54"
  }
  
  console.log(clock_elems)
  console.log(colors)
  
  function change_colors(time_obj){
    var hour = time_obj.getHours();
    var minute = time_obj.getMinutes();
    var second = time_obj.getSeconds();
    
    clock_elems["hourTen"].style.backgroundColor = colors[Math.floor(hour / 10)];
    clock_elems["hourOnes"].style.backgroundColor = colors[hour % 10];
    clock_elems["minuteTen"].style.backgroundColor = colors[Math.floor(minute / 10)];
    clock_elems["minuteOnes"].style.backgroundColor = colors[minute % 10];
    clock_elems["secondTen"].style.backgroundColor = colors[Math.floor(second / 10)];
    clock_elems["secondOnes"].style.backgroundColor = colors[second % 10]; 

  }
  
  change_colors(new Date())
  
  var intval = setInterval(function(){
    change_colors(new Date())
  }, 1000)



}, false);





document.re

/*

<div id="hour-ten" class="time"></div>
            <div id="hour-ones" class="time"></div>
            <div class="middle">:</div>
            <div id="minute-ten" class="time"></div>
            <div id="minute-ones" class="time"></div>
            <div class="middle">:</div>
            <div id="second-ten" class="time"></div>
            <div id="second-ones" class="time"></div>*/


// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
