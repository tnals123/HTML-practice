
var touchednumber;
var touchedorder;
var seconds=00;
var tens=00;
var appendtens=document.getElementById("tens");
var appendseconds=document.getElementById("seconds");
var buttonstart=document.getElementById("start");
var Interval;

function GameStart(){
    computernumber=[1,2,3,4,5,6,7,8,9];
    var numbers=document.getElementsByClassName("numbers");
    var gamestartbutton=document.getElementById("gamestartbutton");
    var gameagainbutton=document.getElementById("gameagainbutton");
    computernumber.sort(() => Math.random() - 0.5);
    for(var i=0;i<=8;i++){
        numbers[i].innerHTML=computernumber[i];
        numbers[i].draggable=true;
    }
    for(var i=9;i<=17;i++){
        numbers[i].draggable=true;
    }
    gamestartbutton.disabled="disabled";
    gameagainbutton.disabled="disabled";
}

function Number_DragStart(number){
    var numbers=document.getElementsByClassName("numbers");
    console.log(numbers);
    touchednumber=numbers[number].innerHTML;
    touchedorder=number;
}
function myDragOver(event){
    event.preventDefault();
}

function Change_Numbers_Drop(number){
    var numbers=document.getElementsByClassName("numbers");
    numbers[touchedorder].innerHTML=numbers[number].innerHTML;
    numbers[number].innerHTML=touchednumber;
    GameOver();
}

function GameAgainStart(){
    var numbers=document.getElementsByClassName("numbers");
    for (var i=0;i<=8;i++){
        numbers[i].innerHTML="?";
    }
    for (i=9;i<=17;i++){
        numbers[i].innerHTML="";
    }
        var gamestartbutton=document.getElementById("gamestartbutton");
        gamestartbutton.disabled=false;
        tens=00;
        seconds=00;
        appendseconds.innerHTML=00;
        appendtens.innerHTML=00;
}

function GameOver(){
    var numbers=document.getElementsByClassName("numbers");
    var correctnumber=['1','2','3','4','5','6','7','8','9'];
    var array=[];
    for(i=9;i<=17;i++){
        array.push(numbers[i].innerHTML);
    }
    console.log(array);
    if ((JSON.stringify(array)===JSON.stringify(correctnumber))){
        clearInterval(Interval);
        alert("축하드립니다!!" + " 걸린 시간: "+ seconds+"초 "+tens);
        var gameagainbutton=document.getElementById("gameagainbutton");
        for(i=0;i<=17;i++){
            numbers[i].draggable=false;
        }
        gameagainbutton.disabled=false;
        
    }
}

function TimerStart() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

function startTimer () {
    tens++; 
    if(tens <= 9){
      appendtens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      appendtens.innerHTML = tens;  
    }  
    if (tens > 99) {
      seconds++;
      appendseconds.innerHTML = "0" + seconds;
      tens = 0;
      appendtens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
      appendseconds.innerHTML = seconds;
    }
  }
