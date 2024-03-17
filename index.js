function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 + num2;
    alert("Result: " + result);
}

function subtract() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 - num2;
    alert("Result: " + result);
}

function divide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num2 == 0) {
        alert("Error: Cannot divide by zero");
    } else {
        var result = num1 / num2;
        alert("Result: " + result);
    }
}

function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 * num2;
    alert("Result: " + result);
}

