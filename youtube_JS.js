var hidden_menu_clicked=0;

function ChangeColor(changepoint){
    var changesection=document.getElementById(changepoint)
    changesection.style.background="#C0C0C0"
}
function ChangeColor_Click(changepoint){
    var changesection=document.getElementById(changepoint)
    changesection.style.background="#808080"
}

function ChangeColor_AfterClick(changepoint){
    var changesection=document.getElementById(changepoint)
    changesection.style.background="#C0C0C0"
}

function ChangeColor_Origin(changepoint){
    var changesection=document.getElementById(changepoint)
    changesection.style.background="white"
}

function Open_Hidden_Menu(){
    var openbutton=document.getElementById("open_button");
    var videoscreen=document.getElementById("background");
    videoscreen.style.display="block";
    videoscreen.style.transition="1s";
    console.log(hidden_menu_clicked);
    openbutton.style.left=0+'px';
    openbutton.style.transition= "0.3s";
    hidden_menu_clicked=1;
}

function Close_Hidden_Menu(){
    var closebutton=document.getElementById("open_button");
    console.log(hidden_menu_clicked);
    var videoscreen=document.getElementById("background");
    videoscreen.style.display="none";
    videoscreen.style.transition="1s";
    closebutton.style.left=-200+'px';
    closebutton.style.transition= "0.3s";
    hidden_menu_clicked=0;
}

function Open_And_Close(){
    if (hidden_menu_clicked==0){
        Open_Hidden_Menu();
    }
    else if (hidden_menu_clicked==1){
        Close_Hidden_Menu();
    }
}