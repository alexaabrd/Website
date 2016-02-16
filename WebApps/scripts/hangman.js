var phrases = ["webapps are cool", "hangman is fun", "canvases are nifty", "This is the last phrase"];
var phrase = "";
var numErrors = 0;
var count = 0;
var numCorrect = 0;

 var c;
 var ctx;

window.addEventListener( "keypress", readKey, false );



function beginGame(level) {
//clear canvas
 phrase= phrases[level];

 c = document.getElementById("canvas");
 ctx = c.getContext("2d");
 ctx.font = "30px Arial";
 ctx.beginPath();
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 
 ctx.moveTo(200,100);
 ctx.lineTo(200,50);
 ctx.lineTo(100,50);
 ctx.lineTo(100,350);
 ctx.moveTo(25,350)
 ctx.lineTo(175,350);
 ctx.stroke();
 ctx.moveTo(250,350);
 var pos=250;

 for (var i = 0; i < phrase.length;i++) { 
  if (phrase[i] === " ") {
	pos+=30;
	ctx.moveTo(pos,350);
   } else {
   pos+=20;
   ctx.lineTo(pos,350);
   pos+=10;
   ctx.moveTo(pos,350);
  }
}

 ctx.stroke();
}


function readKey(e){
 var x = e.charCode;
 var y = String.fromCharCode(x);

 count = 0;

 if (x > 96 && x <123) {
  for (var i = 0; i <phrase.length;i++) {
   if (phrase[i] === y) {
     ctx.strokeText(y,250+30*i,350);
 	count++;
        numCorrect++;
   }
  } 
  if(numCorrect === phrase.length) {
    endGame(true);
    return;
  }
 }else { 
   alert("Invalid key press. Make sure CapsLock is off.");
  }

 if (count===0) error(y);
}



function error(y) {
 numErrors++;
 if (numErrors >6) return;
         console.log("error");
    ctx.strokeText(y,400+numErrors*30,50);
  ctx.beginPath();

 if (numErrors ===1) {  
  ctx.arc(200,125,25,0,2*Math.PI);
  ctx.stroke();
  return;
 }
 if (numErrors ===2) {
  ctx.moveTo(200,150);
  ctx.lineTo(200,250);
  ctx.stroke();
  return;
 }
 if (numErrors ===3) {
  ctx.moveTo(200,170);
  ctx.lineTo(170,220);
  ctx.stroke(); 
  return;
 }
 if (numErrors ===4) {
  ctx.moveTo(200,170);
  ctx.lineTo(230,220);
  ctx.stroke();
  return;
 }
 if (numErrors ===5) { 
  ctx.moveTo(200,250);
  ctx.lineTo(180,290);
  ctx.stroke();
  return;
 }
 if (numErrors ===6) {
  ctx.moveTo(200,250);
  ctx.lineTo(220,290);
  ctx.stroke(); 
  endGame(false);
 }
}



function endGame(win) {
  ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();

 if (win ==true) {

 }else {
  ctx.moveTo(205,120);
  ctx.lineTo(215,110);

  ctx.moveTo(205,110);
  ctx.lineTo(215,120);

  ctx.moveTo(195,120);
  ctx.lineTo(185,110);

  ctx.moveTo(195,110);
  ctx.lineTo(185,120);
  ctx.moveTo(188,140);

  ctx.arc(200,140,12,Math.PI,2*Math.PI);
  ctx.stroke();
}}
