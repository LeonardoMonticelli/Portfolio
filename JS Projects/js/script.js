"use strict";

//Start time counter
function changeClock() {
    let secElement = document.getElementById("seconds");
    let secondsCount = Number(secElement.innerHTML);

    secondsCount++;
    secElement.innerHTML = secondsCount;

    if (secondsCount < 3600) {
        setTimeout(changeClock, 1000);
    }
    if (secondsCount == 3600) {
        alert("Did you really spend one hour in here?")
    }
}
setTimeout(changeClock, 1000);
//End time counter

//Start calculator
var cache = null;
var lastOperation = null;

function button(x) {
    if (
        document.getElementById("plus").classList.contains("turnOn") ||
        document.getElementById("minus").classList.contains("turnOn") ||
        document.getElementById("multiply").classList.contains("turnOn") ||
        document.getElementById("divide").classList.contains("turnOn")
    ) {
        if (document.getElementById("plus").classList.contains("turnOn")) {
            lastOperation = "plus";
        }
        if (document.getElementById("minus").classList.contains("turnOn")) {
            lastOperation = "minus";
        }
        if (document.getElementById("multiply").classList.contains("turnOn")) {
            lastOperation = "multiply";
        }
        if (document.getElementById("divide").classList.contains("turnOn")) {
            lastOperation = "divide";
        }
        resetDisplay();
        cache = Number(document.getElementById("result").value);
        document.getElementById("result").value = "";
    }
    document.getElementById("result").value += x;
}

function reset() {
    document.getElementById("result").value = "";
    cache = null;
    resetDisplay();
}

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function nothing(a, b) {
    return a;
}

function makeOperation(objectId, whatToDo) {
    if (cache != null) {
        if (objectId == "equal") {
            switch (lastOperation) {
                case "plus":
                    whatToDo = plus;
                    break;
                case "minus":
                    whatToDo = minus;
                    break;
                case "multiply":
                    whatToDo = multiply;
                    break;
                case "divide":
                    whatToDo = divide;
                    break;
                default:
                    whatToDo = nothing;
            }
        }
        var result = Number(document.getElementById("result").value);
        result = whatToDo(cache, result);
        document.getElementById("result").value = result;
        cache = null;
        lastOperation = objectId;
    }
    resetDisplay();
    document.getElementById(objectId).classList.add("turnOn");
}

function resetDisplay() {
    document.getElementById("equal").classList.remove("turnOn");
    document.getElementById("plus").classList.remove("turnOn");
    document.getElementById("minus").classList.remove("turnOn");
    document.getElementById("multiply").classList.remove("turnOn");
    document.getElementById("divide").classList.remove("turnOn");
}
//End calculator

//Start-BeadGen
function createImage() {
    let htmlItem = document.getElementById("beadCon");

    let result = "";

    let mapOfImage = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 3, 0, 2, 3, 3, 2, 0, 3, 1],
        [1, 3, 0, 2, 3, 3, 2, 0, 3, 1],
        [1, 3, 0, 2, 3, 3, 2, 0, 3, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 3, 3, 2, 3, 3, 2, 3, 3, 1],
        [1, 3, 3, 3, 2, 2, 3, 3, 3, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    for (let rows = 0; rows < mapOfImage.length; rows++) {
        result += "<div>";
        for (let columns = 0; columns < mapOfImage[rows].length; columns++) {
            result += "<div class='box ' id=" + 'bead' + mapOfImage[rows][columns] + ">" + "</div>";
        }
        result += "</div>";
    }
    htmlItem.innerHTML = result;
}

function undoImage() {
    let htmlItem = document.getElementById("beadCon");
    let result = "Creation of an image through a matrix";
    htmlItem.innerHTML = result;
}
//End-BeadGen

//Start-ColorTable$¨
function genTable() {
    let row = document.getElementById("row").value;
    let column = document.getElementById("column").value;

    let colIn = document.getElementById("colors").selectedIndex;
    let colOp = document.getElementById("colors").options;

    let cont = document.getElementById("cont");

    let result = "";

    for (let a = 0; a < row; a++) {
        result += "<div class='cell " + colOp[colIn].value + "'>";
        for (let b = 0; b < column; b++) {
            result += "<div class='cell " + colOp[colIn].value + " '></div>";
        }
        result += "</div>";
    }
    cont.innerHTML = result;
}

function undoGenTable() {
    let cont = document.getElementById("cont");
    let result = "";
    cont.innerHTML = result;
}
//End-ColorTable

//Start-DrawTable
const GRID_SIZE = 8;
var myContainer = document.getElementById("contMatrix");

function buildEmptyMatrix(size) {
    let myMatrix = new Array();
    for (let i = 0; i < size; i++) {
        let myNewRow = new Array();
        for (let j = 0; j < size; j++) {
            myNewRow.push(0);
        }
        myMatrix.push(newRow);
    }
}

for (let i = 0; i < GRID_SIZE; i++) {
    let myNewRow = document.createElement("div");
    for (let j = 0; j < GRID_SIZE; j++) {
        let myNewCell = document.createElement("div");
        myNewCell.classList.add("cellM");
        myNewRow.appendChild(myNewCell);
        myNewCell.addEventListener("click", cellClicked);
    }
    myContainer.appendChild(myNewRow);
}

function cellClicked() {
    let myClickedCell = event.srcElement;

    myClickedCell.classList.toggle("liveCell");
}
//End-DrawTable