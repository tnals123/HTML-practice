var mybackgroundcolor = null;


function dragEvent(i){
   
    var targetdiv=document.getElementsByClassName("color");
    mybackgroundcolor=window.getComputedStyle(targetdiv[i]).backgroundColor;
    console.log(mybackgroundcolor);
}

function myDragOver(e){
    e.preventDefault();
}


function dropEvent(){
    console.log(mybackgroundcolor);
    document.getElementById("result").style.backgroundColor=mybackgroundcolor;
}