function input(){
    return document.getElementById("inputs").innerText;
}
function printInput(num){
    document.getElementById("inputs").innerText=num;
}
function output(){
    return document.getElementById("outputs").innerText;
}
function printOutput(num){
    if(num == ""){
        document.getElementById("outputs").innerText=num;    
    }
    else{
        document.getElementById("outputs").innerText=getFormatedNum(num);
    }
}
function getFormatedNum(num){
    var n = Number(num)  ;
    var value = n.toLocaleString("en");
    return value;
}
function commaReplace(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operators");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="AC"){
            printInput("");
            printOutput("");
        }
        else if(this.id=="DEL"){
            var output2=commaReplace(output()).toString();
            if(output2){
                output2= output2.substring(0,output2.length-1);
                printOutput(output2);
            }
        }
        else{
            var output1 = output();
            var input1 = input();
            if(output1!="")
            {
                output1 = commaReplace(output1);
                input1 = input1+output1;
                if(this.id=="="){
                    var result=eval(input1);
                    printOutput(result);
                    printInput("");
                }
                else{
                    input1=input1+this.id;
                    printInput(input1);
                    printOutput("");
                }
            }
        }
    });
}
var number1 = document.getElementsByClassName("numbers");
for(var j=0;j<number1.length;j++){
    number1[j].addEventListener('click',function(){
        var output1=commaReplace(output());
        if(output1!=null){
            output1=output1+this.id;
            printOutput(output1);
        }
    })
}


