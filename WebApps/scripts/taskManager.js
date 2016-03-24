var xmlhttp;


function loadManager() {

 if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
//check to see if logged in ie session set

}

function login() { 
  xmlhttp.onreadystatechange = function(){
  if(xmlhttp.readyState == 4){
        document.getElementById("task6").innerHTML=xmlhttp.responseText;
  }
 }
console.log("HERE");
  xmlhttp.open("POST", "php/functions.php" ,true);
  xmlhttp.send();

}




function updateTasks() {

}


function logout() {


}
