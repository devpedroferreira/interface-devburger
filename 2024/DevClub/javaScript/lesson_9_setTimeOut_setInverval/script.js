/* setTimout = executa 1 vez */
/* setinterval = executa infinita vezes */

/*
// 1 arrow function its modern, its a function
setTimeout(() => {

}, timeout);

// 2
setTimeout(function(){

}, timeout)

// 3
function myFunction(){
    // commads function to run
} 
setTimeout(myFunction, timeout);
*/

/*
setTimeout(function(){
    alert("EXECUTEI")

}, 3000); // time in milesegundos 1000 = 1 ms
*/

// clearInterval stoped setInterval
let number = 0
let cronometer 
let h1 = document.querySelector('h1')

function start(){
    
    cronometer = setInterval( function(){
        number++
        h1.innerHTML = number
    }, 1000) //1000ms = 1 sec
}

function stop(){
    clearInterval(cronometer)
}

/*
// setInterval run every second for ever, dont stop
// write modern function
setInterval(() =>{ 
    console.log(number++)
}, 1000); // cont every 1 second
*/
