
function home() {

var e = document.getElementById("task3");
          e.style.display = 'none';
    e = document.getElementById("task4");
          e.style.display = 'none';
    e = document.getElementById("task5");
          e.style.display = 'none';
    e = document.getElementById("task6");
          e.style.display = 'none';

}

function task3() {
window.removeEventListener("keypress", readKey, false);
var e = document.getElementById("task3");
          e.style.display = 'block';
    e = document.getElementById("task4");
          e.style.display = 'none';
    e = document.getElementById("task5");
          e.style.display = 'none';
    e = document.getElementById("task6");
          e.style.display = 'none';

printTable();
}



function task4() {
window.addEventListener("keypress", readKey, false);
var e = document.getElementById("task3");
          e.style.display = 'none';
    e = document.getElementById("task4");
          e.style.display = 'block';
    e = document.getElementById("task5");
          e.style.display = 'none';
    e = document.getElementById("task6");
          e.style.display = 'none';
beginGame(0);
}



function task5() {
window.removeEventListener("keypress", readKey, false);
var e = document.getElementById("task3");
          e.style.display = 'none';
    e = document.getElementById("task4");
          e.style.display = 'none';
    e = document.getElementById("task5");
          e.style.display = 'block';
    e = document.getElementById("task6");
          e.style.display = 'none';

}



function task6() {
window.removeEventListener("keypress", readKey, false);
var e = document.getElementById("task3");
          e.style.display = 'none';
    e = document.getElementById("task4");
          e.style.display = 'none';
    e = document.getElementById("task5");
          e.style.display = 'none';
    e = document.getElementById("task6");
          e.style.display = 'block';

loadManager();
}














