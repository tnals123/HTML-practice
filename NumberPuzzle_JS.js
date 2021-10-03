var correctnumber=[1,2,3,4,5,6,7,8,9];
var mynumber=[0,0,0,0,0,0,0,0,0];
var computernumber=[1,2,3,4,5,6,7,8,9];
var isdragpoint="";
var top_touchedorder;
var top_touchednumber;
var bottom_touchedorder;
var bottom_touchednumber;
var seconds=00;
var tens=00;
var appendtens=document.getElementById("tens");
var appendseconds=document.getElementById("seconds");
var buttonstart=document.getElementById("start");
var Interval;

function BlockZeroArray(){
    var topnumbers=document.getElementsByClassName("topnumber");
    var bottomnumbers=document.getElementsByClassName("bottomnumber");
    for (i=0;i<=8;i++){
        if (mynumber[i]==0){
            bottomnumbers[i].draggable=false;
        }
        if (computernumber[i]==0){
            topnumbers[i].draggable=false;
        }
    }
}
function GameStart(){
    mynumber=[0,0,0,0,0,0,0,0,0];
    computernumber=[1,2,3,4,5,6,7,8,9];
    var topnumbers=document.getElementsByClassName("topnumber");
    var gamestartbutton=document.getElementById("gamestartbutton");
    var gameagainbutton=document.getElementById("gameagainbutton");
    computernumber.sort(() => Math.random() - 0.5);
    for(var i=0;i<=8;i++){
        topnumbers[i].innerHTML=computernumber[i];
    }
    gamestartbutton.disabled="disabled";
    gameagainbutton.disabled="disabled";
    isgamestarted=true;
    BlockZeroArray();
}

function TopNumber_DragEvent(number){
    top_touchedorder=number;
    top_touchednumber=computernumber[number];
    isdragpoint="top";
 
}
function BottomNumber_DragEvent(number){
    bottom_touchedorder=number;
    bottom_touchednumber=mynumber[number];
    isdragpoint="bottom";
}

function myDragOver(event){
    event.preventDefault();
}

function DropEvent_BottomLine(number){
    var topnumbers=document.getElementsByClassName("topnumber");
    var bottomnumbers=document.getElementsByClassName("bottomnumber");
    if (isdragpoint=="top"){
        if (mynumber[number]==0){
            mynumber[number]=top_touchednumber;
            bottomnumbers[number].innerHTML=top_touchednumber;
            bottomnumbers[number].style.backgroundColor="yellow";
            topnumbers[top_touchedorder].style.backgroundColor="white";
            topnumbers[top_touchedorder].innerHTML="";
            computernumber[top_touchedorder]=0;  
            console.log(mynumber);
            GameOver(); 
            BlockZeroArray();
        }
        else if (mynumber[number]!=0){
            topnumbers[top_touchedorder].innerHTML=mynumber[number];
            bottomnumbers[number].innerHTML=top_touchednumber;
            computernumber[top_touchedorder]=mynumber[number];
            mynumber[number]=top_touchednumber;
            console.log(mynumber);
            GameOver(); 
            BlockZeroArray(); 
        }
    }
    else if (isdragpoint=="bottom"){
        bottomnumbers[bottom_touchedorder].innerHTML=mynumber[number];
        bottomnumbers[number].innerHTML=bottom_touchednumber;
        bottomnumbers[number].style.backgroundColor="yellow";
        mynumber[bottom_touchedorder]=mynumber[number];
        mynumber[number]=bottom_touchednumber;
        console.log(mynumber);
        GameOver();  
        BlockZeroArray();
        if (mynumber[bottom_touchedorder]==0){
            bottomnumbers[bottom_touchedorder].style.backgroundColor="white";
            bottomnumbers[bottom_touchedorder].innerHTML="";
            
        }
    }
}
function DropEvent_TopLine(number){
    var topnumbers=document.getElementsByClassName("topnumber");
    var bottomnumbers=document.getElementsByClassName("bottomnumber");
    if (isdragpoint=="top"){
        topnumbers[top_touchedorder].innerHTML=computernumber[number];
        topnumbers[number].innerHTML=top_touchednumber;
        topnumbers[number].style.backgroundColor="yellow";
        computernumber[top_touchedorder]=computernumber[number];
        computernumber[number]=top_touchednumber;
        console.log(mynumber);
        GameOver();  
        BlockZeroArray();
        if (computernumber[top_touchedorder]==0){
            topnumbers[top_touchedorder].style.backgroundColor="white";
            topnumbers[top_touchedorder].innerHTML="";
        }
    }
    if (isdragpoint=="bottom"){
        if (computernumber[number]==0){
            topnumbers[number].innerHTML=mynumber[bottom_touchedorder];
            topnumbers[number].innerHTML=bottom_touchednumber;
            topnumbers[number].style.backgroundColor="yellow";
            computernumber[number]=bottom_touchednumber;
            mynumber[bottom_touchedorder]=0;
            bottomnumbers[bottom_touchedorder].style.backgroundColor="white";
            bottomnumbers[bottom_touchedorder].innerHTML=""; 
            console.log(mynumber);
            GameOver();  
            BlockZeroArray();
        }
        else if (computernumber[number]!=0){
            bottomnumbers[bottom_touchedorder].innerHTML=computernumber[number];
            topnumbers[number].innerHTML=bottom_touchednumber;
            computernumber[number]=mynumber[bottom_touchedorder];
            mynumber[bottom_touchedorder]=bottom_touchednumber;
            console.log(mynumber);
            GameOver();  
            BlockZeroArray();
        }
    }
}
function GameAgainStart(){
    var topnumbers=document.getElementsByClassName("topnumber");
    var bottomnumbers=document.getElementsByClassName("bottomnumber");
    for (var i=0;i<=8;i++){
        topnumbers[i].innerHTML="?";
        topnumbers[i].style.backgroundColor="yellow";
        bottomnumbers[i].innerHTML="";
        bottomnumbers[i].style.backgroundColor="white";
        topnumbers[i].draggable=true;
        bottomnumbers[i].draggable=true;
    }
        var gamestartbutton=document.getElementById("gamestartbutton");
        gamestartbutton.disabled=false;
        tens=00;
        seconds=00;
        appendseconds.innerHTML=00;
        appendtens.innerHTML=00;
}

function GameOver(){
    if ((JSON.stringify(mynumber)===JSON.stringify(correctnumber))){
        clearInterval(Interval);
        alert("축하드립니다!!" + " 걸린 시간: "+ seconds+"초 "+tens);
        var gameagainbutton=document.getElementById("gameagainbutton");
        var topnumbers=document.getElementsByClassName("topnumber");
        var bottomnumbers=document.getElementsByClassName("bottomnumber");
        for(i=0;i<=8;i++){
            topnumbers[i].draggable=false;
            bottomnumbers[i].draggable=false;
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
      console.log("seconds");
      seconds++;
      appendseconds.innerHTML = "0" + seconds;
      tens = 0;
      appendtens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
      appendseconds.innerHTML = seconds;
    }
  }
