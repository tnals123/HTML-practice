function ResultEvent(){
    var targetnum=document.getElementById("targetnumber").value;
    var resultlist=document.getElementsByClassName("result");
    console.log(resultlist);
    
    for(var i=0;i<=8;i++){
        var asdf=document.createElement('div');
        var tmpDiv=document.createElement('span');
        var tmpSpan=document.createElement('span');

        tmpSpan.innerHTML=targetnum+"x "+(i+1)+"="
        tmpDiv.className="result";
        tmpDiv.innerHTML=targetnum*(i+1);

        asdf.appendChild(tmpSpan);
        asdf.appendChild(tmpDiv);
        document.body.appendChild(asdf);

    }
}
