var correctnumber=[1,2,3,4,5,6,7,8,9];
var mynumber=[0,0,0,0,0,0,0,0,0];
var computernumber=[1,2,3,4,5,6,7,8,9];
var isdragpoint="";
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
        }
        else if (mynumber[number]!=0){
            topnumbers[top_touchedorder].innerHTML=mynumber[number];
            bottomnumbers[number].innerHTML=top_touchednumber;
            computernumber[top_touchedorder]=mynumber[number];
            mynumber[number]=top_touchednumber;
            console.log(mynumber);
            GameOver();  
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
        }
        else if (computernumber[number]!=0){
            bottomnumbers[bottom_touchedorder].innerHTML=computernumber[number];
            topnumbers[number].innerHTML=bottom_touchednumber;
            computernumber[number]=mynumber[bottom_touchedorder];
            mynumber[bottom_touchedorder]=bottom_touchednumber;
            console.log(mynumber);
            GameOver();  
        }
    }
}

function GameOver(){
    if ((JSON.stringify(mynumber)===JSON.stringify(correctnumber))){
        alert("축하드립니다!!");
        
    }
}