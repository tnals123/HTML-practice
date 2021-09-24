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
    var asdf=document.getElementById("asdf");
    var videoscreen=document.getElementById("background");
    videoscreen.style.display="block";
    videoscreen.style.transition="1s";
    console.log(hidden_menu_clicked);
    asdf.style.left=0.1+'px';
    asdf.style.transition= "0.3s";
    hidden_menu_clicked=1;
}

function Close_Hidden_Menu(){
    var asdf=document.getElementById("asdf");
    console.log(hidden_menu_clicked);
    var videoscreen=document.getElementById("background");
    videoscreen.style.display="none";
    videoscreen.style.transition="1s";
    asdf.style.left=-200+'px';
    asdf.style.transition= "0.3s";
    hidden_menu_clicked=0;
}

function asdf(){
    if (hidden_menu_clicked==0){
        Open_Hidden_Menu();
    }
    else if (hidden_menu_clicked==1){
        Close_Hidden_Menu();
    }
}