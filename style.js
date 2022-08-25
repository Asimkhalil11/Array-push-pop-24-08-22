let array = [];
function arrayPush() {

    let pushValue = document.getElementById('value').value;
    array.push(pushValue);
    arrayLop();
}

function arrayPop() {
    array.pop();
    arrayLop();
}
function arrayLop() {
    document.getElementById("result").innerHTML="";
    document.getElementById("value").value="";

    for (let a = 0; a < array.length; a++) {
        let html= `<h1>${a+1}- ${array[a]}</h1>`

        document.getElementById('result').innerHTML+=html;
    }     
    }   
