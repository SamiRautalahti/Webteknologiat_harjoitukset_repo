let defaultValue;
 
window.onload = function () {
        defaultValue = 5;
        document.getElementById("first-nr").value = getRandomInt(5);
        document.getElementById("second-nr").value = getRandomInt(9);
}
/*
// jQuery esimerkki
$(function() {
    // Document is ready
        defaultValue = 5;
        $("first-nr").val(defaultValue);
        $("second-nr").val(defaultValue);
});
*/

function setFirstNr(type) {
    let currentValue = document.getElementById("first-nr").value;
    //let currentValue = $("first-nr").val();
    if (type == 'plus') {
        //alert('+');
        currentValue = parseInt(currentValue) + 1;
    } else {
        //alert('-');
        currentValue = parseInt(currentValue) - 1;
    }

    document.getElementById("first-nr").value = currentValue;
    //$("#first-nr").val(currentValue);

}

function setSecondNr(type) {
    let currentValue = document.getElementById("second-nr").value;
    //let currentValue = $("second-nr").val();
    if (type == 'plus') {
        //alert('+');
        currentValue = parseInt(currentValue) + 1;
    } else {
        //alert('-');
        currentValue = parseInt(currentValue) - 1;
    }

    document.getElementById("second-nr").value = currentValue;
    //$("#second-nr").val(currentValue);

}

function calculate() {
    let operators = document.getElementById("operationSelect");
    let selectedValue = operators.options[operators.selectedIndex].value; // 1

    let currentValueA = document.getElementById("first-nr").value;
    let currentValueB = document.getElementById("second-nr").value;

    let total= eval(currentValueA + selectedValue + currentValueB);
    document.getElementById("vastaus").value = total;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

  