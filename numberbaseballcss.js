var myinputcount=0;
var numbers=[];
var computernumber=[];
var gameover=false;
var gamewin=false;
Computer_Number();
function Computer_Number(){
    var comnumbers=[0,1,2,3,4,5,6,7,8,9];
    var input_1=document.getElementById("number_1");
    var input_2=document.getElementById("number_2");
    var input_3=document.getElementById("number_3");
    var randNum = Math.floor(Math.random()*(comnumbers.length-1));
    computernumber.push(comnumbers[randNum]);
    comnumbers.splice(randNum,1);
    var randNum = Math.floor(Math.random()*(comnumbers.length-1));
    computernumber.push(comnumbers[randNum]);
    comnumbers.splice(randNum,1);
    var randNum = Math.floor(Math.random()*(comnumbers.length-1));
    computernumber.push(comnumbers[randNum]);
    
    comnumbers.splice(randNum,1);  
    input_1.innerText="?";
    input_2.innerText="?";
    input_3.innerText="?";
    console.log(computernumber);
    
}

function My_Number(number){
    var button=document.getElementById(number);
    var myinput_1=document.getElementById("number_4");
    var myinput_2=document.getElementById("number_5");
    var myinput_3=document.getElementById("number_6");
    var numberbutton=document.getElementsByClassName("numberbutton");
    button.disabled="disabled";
    numbers.push(parseInt(number));
 

    if (numbers.length==1){
        myinput_1.innerText=numbers[0]; 
    }
    else if (numbers.length==2){
        myinput_2.innerText=numbers[1];
    }
    else if (numbers.length==3){   
        myinput_3.innerText=numbers[2];
        for(var i=0;i<=9;i++){
            numberbutton[i].disabled="disabled";
        }
        numberbutton[11].disabled=false;
    }
    
}

function Delete_Number(){
    numbers=[];
    var myinput_1=document.getElementById("number_4");
    var myinput_2=document.getElementById("number_5");
    var myinput_3=document.getElementById("number_6");
    var numberbutton=document.getElementsByClassName("numberbutton");
    for(var i=0;i<=9;i++){
        numberbutton[i].disabled=false;
    }
    myinput_1.innerText="";
    myinput_2.innerText="";
    myinput_3.innerText="";
    numberbutton[11].disabled="disabled";
}

function Remove_Record(){
    var result=document.getElementById("resultscreen");
    result.innerHTML="";
    
}

function Game_Start(){
    var strike=0;
    var out=0;
    var ball=0;
    var samenumber;
    var create=document.createElement('div')
    var numberbutton=document.getElementsByClassName("numberbutton");
    var result=document.getElementById("resultscreen");

    samenumber=(computernumber.filter(x=>numbers.includes(x)));
    result.appendChild(create);

    for(var i=0;i<=9;i++){
        numberbutton[i].disabled=false;
    }
   
    if (samenumber.length==0){
        out+=1;
        var outmsg=String(out);
        var outcolor=outmsg.fontcolor("red");
        var stmsg=String(strike);
        var stcolor=stmsg.fontcolor("blue");
        var ballmsg=String(ball);
        var ballcolor=ballmsg.fontcolor("pink");
        create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
        out=0;
    }
    else if (samenumber.length==1){   
        if (numbers[0]==computernumber[0] || numbers[1]==computernumber[1] || numbers[2]==computernumber[2]){
            strike+=1;
            var outmsg=String(out);
            var outcolor=outmsg.fontcolor("red");
            var stmsg=String(strike);
            var stcolor=stmsg.fontcolor("blue");
            var ballmsg=String(ball);
            var ballcolor=ballmsg.fontcolor("pink");
            create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
            strike=0;
        }
        else{
            ball+=1;
            var outmsg=String(out);
            var outcolor=outmsg.fontcolor("red");
            var stmsg=String(strike);
            var stcolor=stmsg.fontcolor("blue");
            var ballmsg=String(ball);
            var ballcolor=ballmsg.fontcolor("pink");
            create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
            ball=0;
        }
    }
    else if (samenumber.length==2){
        if (numbers[0]==computernumber[0] && numbers[1]==computernumber[1] || numbers[0]==computernumber[0] && numbers[2]==computernumber[2] || 
            numbers[2]==computernumber[2] && numbers[1]==computernumber[1] ){
            strike+=2;
            var outmsg=String(out);
            var outcolor=outmsg.fontcolor("red");
            var stmsg=String(strike);
            var stcolor=stmsg.fontcolor("blue");
            var ballmsg=String(ball);
            var ballcolor=ballmsg.fontcolor("pink");
            create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
            strike=0;
            }
        else if (numbers[0]==computernumber[0] || numbers[1]==computernumber[1] || numbers[2]==computernumber[2]){
            strike+=1;
            ball +=1;
            var outmsg=String(out);
            var outcolor=outmsg.fontcolor("red");
            var stmsg=String(strike);
            var stcolor=stmsg.fontcolor("blue");
            var ballmsg=String(ball);
            var ballcolor=ballmsg.fontcolor("pink");
            create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
            strike=0;
            ball=0;
        }   
        else{
            ball+=2;
            var outmsg=String(out);
            var outcolor=outmsg.fontcolor("red");
            var stmsg=String(strike);
            var stcolor=stmsg.fontcolor("blue");
            var ballmsg=String(ball);
            var ballcolor=ballmsg.fontcolor("pink");
            create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
            ball=0;
        }      
    }
    else if(samenumber.length==3){
        if (numbers[0]==computernumber[0] && numbers[1]==computernumber[1] && numbers[2]==computernumber[2]){
            strike+=3;
            var input_1=document.getElementById("number_1");
            var input_2=document.getElementById("number_2");
            var input_3=document.getElementById("number_3");
            var outmsg=String(out);
            var outcolor=outmsg.fontcolor("red");
            var stmsg=String(strike);
            var stcolor=stmsg.fontcolor("blue");
            var ballmsg=String(ball);
            var ballcolor=ballmsg.fontcolor("pink");
            create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
            strike=0;
            alert("??????????????????!")
            input_1.innerText=computernumber[0];
            input_2.innerText=computernumber[1];
            input_3.innerText=computernumber[2];

        }
        else if (numbers[0]==computernumber[0] || numbers[1]==computernumber[1] || numbers[2]==computernumber[2]){
            strike+=1;
            ball+=2;
            var outmsg=String(out);
            var outcolor=outmsg.fontcolor("red");
            var stmsg=String(strike);
            var stcolor=stmsg.fontcolor("blue");
            var ballmsg=String(ball);
            var ballcolor=ballmsg.fontcolor("pink");
            create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
            strike=0;
            ball=0;
        }
        else if (numbers[0]==computernumber[0] && numbers[1]==computernumber[1] || numbers[0]==computernumber[0] && numbers[2]==computernumber[2] || 
            numbers[2]==computernumber[2] && numbers[1]==computernumber[1]){
                strike+=2;
                ball+=1;
                var outmsg=String(out);
                var outcolor=outmsg.fontcolor("red");
                var stmsg=String(strike);
                var stcolor=stmsg.fontcolor("blue");
                var ballmsg=String(ball);
                var ballcolor=ballmsg.fontcolor("pink");
                create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
                strike=0;
                ball=0;
            }
        else{
            ball+=3;
            var outmsg=String(out);
            var outcolor=outmsg.fontcolor("red");
            var stmsg=String(strike);
            var stcolor=stmsg.fontcolor("blue");
            var ballmsg=String(ball);
            var ballcolor=ballmsg.fontcolor("pink");
            create.innerHTML="??? ?????? : "+numbers[0]+" "+numbers[1]+" "+numbers[2]+", ?????? : "+outcolor+"O "+stcolor+"S "+ballcolor+"B";
            ball=0; 
        }
    }
}
