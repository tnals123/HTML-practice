

function Computer_Number(){
    var numbers=[0,1,2,3,4,5,6,7,8,9];
    var input_1=document.getElementById("number_1");
    var input_2=document.getElementById("number_2");
    var input_3=document.getElementById("number_3");
    var randNum = Math.floor(Math.random()*(numbers.length-+1));
    input_1.innerText=numbers[randNum];
    numbers.splice(randNum,1);

    console.log(randNum)
    console.log(numbers)

    var randNum = Math.floor(Math.random()*(numbers.length-+1));
    input_2.innerText=numbers[randNum];
    numbers.splice(randNum,1);

    console.log(randNum)
    console.log(numbers)

    var randNum = Math.floor(Math.random()*(numbers.length-+1));
    input_3.innerText=numbers[randNum];
    numbers.splice(randNum,1);

    console.log(randNum)
    console.log(numbers)
    
}
