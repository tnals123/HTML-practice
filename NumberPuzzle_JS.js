var correctnumber=[1,2,3,4,5,6,7,8,9];
var mynumber=[0,0,0,0,0,0,0,0,0];
var computernumber=[1,2,3,4,5,6,7,8,9];
var isgamestarted=false;
var top_touchedorder;
var top_touchednumber;
var bottom_touchedorder;
var bottom_touchednumber;

function GameStart(){
    var topnumbers=document.getElementsByClassName("topnumber");
    var gamestartbutton=document.getElementById("gamestartbutton");
    computernumber.sort(() => Math.random() - 0.5);
    for(var i=0;i<=8;i++){
        topnumbers[i].innerHTML=computernumber[i];
    }
    gamestartbutton.disabled="disabled";
    isgamestarted=true;
}

function TopNumber_DragEvent(number){
    top_touchedorder=number;
    top_touchednumber=computernumber[number];
 
}
function BottomNumber_DragEvent(number){
    bottom_touchednumber=number;
    bottom_touchedorder=mynumber[number];
   
}

function myDragOver(event){
    event.preventDefault();
}
function BottomNumber_DragEvent(number){
    bottom_touchedorder=number;
    bottom_touchednumber=mynumber[number];
    
}




function DropEvent_Top_To_Bottom(number){
    var topnumbers=document.getElementsByClassName("topnumber");
    var bottomnumbers=document.getElementsByClassName("bottomnumber");
    mynumber[number]=top_touchednumber;
    bottomnumbers[number].innerHTML=top_touchednumber;
    bottomnumbers[number].style.backgroundColor="yellow";
    topnumbers[top_touchedorder].style.backgroundColor="white";
    topnumbers[top_touchedorder].innerHTML="";
    computernumber[top_touchedorder]=0;
    
}
function DropEvent_Top_To_Top(number){
    var topnumbers=document.getElementsByClassName("topnumber");
    topnumbers[top_touchedorder].innerHTML=computernumber[number];
    topnumbers[number].innerHTML=top_touchednumber;
    computernumber[top_touchedorder]=computernumber[number];
    computernumber[number]=top_touchednumber;
    if (computernumber[top_touchedorder]==0){
        topnumbers[number].style.backgroundColor="yellow";
        topnumbers[top_touchedorder].innerHTML="";
        topnumbers[top_touchedorder].style.backgroundColor="white";
    }
}
function DropEvent_Bottom_To_Bottom(number){
    var bottomnumbers=document.getElementsByClassName("topnumber");
    bottomnumbers[bottom_touchedorder].innerHTML=mynumber[number];
    bottomnumbers[number].innerHTML=bottom_touchednumber;
    mynumber[bottom_touchedorder]=mynumber[number];
    mynumber[number]=bottom_touchednumber;
    if (mynumber[bottom_touchedorder]==0){
        bottomnumbers[number].style.backgroundColor="yellow";
        bottomnumbers[bottom_touchedorder].innerHTML="";
        bottomnumbers[bottom_touchedorder].style.backgroundColor="white";
    }
}