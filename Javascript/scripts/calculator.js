let defaultValue;
 
window.onload = function () {
        defaultValue = 5;
        document.getElementById("first-nr").value = defaultValue;
        document.getElementById("second-nr").value = defaultValue;
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

function calculate(type) {
    let operators = document.getElementById("operationSelect");
    let selectedText = operators.options[operators.selectedIndex].text; // +
    let selectedValue = operators.options[operators.selectedIndex].value; // 1
}