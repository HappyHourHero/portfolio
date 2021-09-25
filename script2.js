//create function that increases size of project div when clicked
const timeContainer = document.getElementById("time-container");
const deadline = '07-31-2022';

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor( total/(1000*60*60*24) );

    return {
      total,
      days
    };
  }

 function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    function updateClock(){
        const t = getTimeRemaining(endtime);
        clock.innerHTML = ' ' + t.days
      }
      
      updateClock(); 
  }
  

let image = document.querySelector('#ian')
let container = document.querySelector('#curtis-pic')
let calc = document.querySelector('.calc-grow')
let etch = document.querySelector('.etch-grow')
let bull = document.querySelector('.bull-grow')


// let divFunction = function(event){
//     event.target.style.padding = '30px'
// }

// let outer = function(event){
//     event.target.style.padding = '10px'
// }

// calc.addEventListener('mouseenter', divFunction)
// calc.addEventListener('mouseout', outer)

// etch.addEventListener('mouseenter', divFunction)
// etch.addEventListener('mouseout', outer)

// bull.addEventListener('mouseenter', divFunction)
// bull.addEventListener('mouseout', outer)


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let button = document.querySelector('button');

button.addEventListener('click', myFunction)



// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let darkButton = document.getElementById('darker')

function darkToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

darkButton.addEventListener('click', darkToggle)