/*Tens,Seconds & Minutes*/
let showMinutes = document.getElementById('showminutes');
let showTens = document.getElementById('showtens');
let showSeconds = document.getElementById('showseconds');

/* Button Id's */
let startWatch = document.getElementById('startwatch');
let stopWatch = document.getElementById('stopwatch');
let resetWatch = document.getElementById('resetwatch');

let tens =  0;
let seconds = 0;
let minutes = 0;
let startnow;

startWatch.onclick = function(){
    clearInterval(startnow);
    startnow = setInterval(runStopwatch, 10);
}

stopWatch.onclick = function(){
    clearInterval(startnow);
}

resetWatch.onclick = function(){
   clearInterval(startnow);
   tens = seconds = minutes = 0;
   showTens.innerHTML = showSeconds.innerHTML = showMinutes.innerHTML = "00";
}

function runStopwatch(){
    tens++
    if(tens < 99) {
       document.getElementById('showtens').innerHTML = tens;
    } 
    if(tens > 99){
       tens = 0;
       seconds++;
       if(seconds < 10) {
        document.getElementById('showseconds').innerHTML = '0' + seconds;
       } else {
        document.getElementById('showseconds').innerHTML  = seconds;
       }
        
    }

    if(seconds > 59){
       seconds = 0;
       minutes++
       if(minutes < 10) {
        document.getElementById('showminutes').innerHTML = "0" + minutes;
       } else {
        document.getElementById('showminutes').innerHTML = minutes;
       }
       
    }

}
   
