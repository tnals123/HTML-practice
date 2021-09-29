function printAlert(){
    var resultdom=document.getElementById("result");
    alert(resultdom.innerHTML);
}

function mul(){
    var firstnumdom=document.getElementById("firstnum");
    var secondnumdom=document.getElementById("secondnum");
    var resultdom=document.getElementById("result");
    resultdom.innerHTML = firstnumdom.value*secondnumdom.value;
}

function asdf(event){
    var a = document.getElementsByName("team").length;
    var b=document.getElementById(event);
    for (var i=0;i<a;i++){
        console.log(a);
        if(document.getElementsByName("team")[i].checked==true){
            alert(document.getElementsByName("zxcv")[i].innerHTML+" 은 "+ b.value);
        }
    }
}