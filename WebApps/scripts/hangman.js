var phrases = ["webapps are cool", "hangman is fun", "canvases are nifty", "Hello World"];
var phrase = "";
var numErrors = 0;
var found = false;
var numCorrect = 0;
var guessed = [];
 var c;
 var ctx;

function beginGame(level) {
 phrase= phrases[level];
 numCorrect = 0;
 numErrors = 0;
 guessed = []; 
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
	numCorrect++;
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
 found = false;

 if (x > 96 && x <123) {
  if (guessed.indexOf(x) != -1){
    alert("You have already guessed this letter!");
  } else {
   guessed.push(x);
   for (var i = 0; i <phrase.length;i++) {
    if (phrase[i] === y) {
     ctx.fillText(y,250+30*i,350);
 	found = true;
        numCorrect++;
    }
   } 
  if(numCorrect === phrase.length) {
    endGame(true);
    return;
  }
  if (!found) {
   numErrors++;
   error(numErrors, y);
 }
 }
 }else { 
   alert("Invalid key press. Make sure CapsLock is off.");
  }

}



function error(x, y) {

 if (numErrors >6) return;
  ctx.fillText(y,400+numErrors*30,50);

 if (x ===1) {  
  ctx.moveTo(225,125);
  ctx.arc(200,125,25,0,2*Math.PI);
  ctx.stroke();
  return;
 }
 if (x ===2) {
  ctx.moveTo(200,150);
  ctx.lineTo(200,250);
  ctx.stroke();
  return;
 }
 if (x ===3) {
  ctx.moveTo(200,170);
  ctx.lineTo(170,220);
  ctx.stroke(); 
  return;
 }
 if (x ===4) {
  ctx.moveTo(200,170);
  ctx.lineTo(230,220);
  ctx.stroke();
  return;
 }
 if (x ===5) { 
  ctx.moveTo(200,250);
  ctx.lineTo(180,290);
  ctx.stroke();
  return;
 }
 if (x ===6) {
  ctx.moveTo(200,250);
  ctx.lineTo(220,290);
  ctx.stroke(); 
  if (y != " ") endGame(false);
 }
}




function endGame(win) {

  ctx.beginPath();
    ctx.moveTo(275,25);
    ctx.quadraticCurveTo(225,25,225,62.5);
    ctx.quadraticCurveTo(225,100,250,100);
    ctx.quadraticCurveTo(250,120,230,125);
    ctx.quadraticCurveTo(260,120,265,100);
    ctx.quadraticCurveTo(325,100,325,62.5);
    ctx.quadraticCurveTo(325,25,275,25);


 if (win==true) {
  for (var i = numErrors+1; i <7;i++){
    error(i," ");
  }
  ctx.font = "25px Arial";
  ctx.strokeText("YOU",250,60);  
  ctx.strokeText("WON!",243,80);

  ctx.moveTo(195,115);
  ctx.arc(190,115,5,0,2*Math.PI);

  ctx.moveTo(215,115);
  ctx.arc(210,115,5,0,2*Math.PI);

  ctx.moveTo(215,128);
  ctx.arc(200,128,15,0*Math.PI,1*Math.PI);
  ctx.stroke();
 }else {
  ctx.font = "25px Arial";
  ctx.strokeText("YOU",250,60);     
  ctx.strokeText("LOST!",240,80);

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
 }

}
