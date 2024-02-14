function performConversion() {
    var convert = document.getElementById("convert").value;
    var to = document.getElementById("to").value;
    var inputNumber = document.getElementById("inputNumber").value;
    var outputResult = document.getElementById("outputResult");
    
    //*binary*//
    if (convert === "binary") {
        if (to === "decimal") {
            outputResult.value = parseInt(inputNumber, 2);
        } else if (to === "octal") {
            outputResult.value = parseInt(inputNumber, 2).toString(8);
        } else if (to === "hexadecimal") {
            outputResult.value = parseInt(inputNumber, 2).toString(16).toUpperCase();
        } else {
            outputResult.value = "Invalid Output Base";
        }
    } 
    
    //*decimal*//
    else if (convert === "decimal") {
        if (to === "binary") {
            outputResult.value = (inputNumber >>> 0).toString(2);
        } else if (to === "octal") {
            outputResult.value = parseInt(inputNumber).toString(8);
        } else if (to === "hexadecimal") {
            outputResult.value = parseInt(inputNumber).toString(16).toUpperCase();
        } else {
            outputResult.value = "Invalid Output Base";
        }
    }
    
    //*octal*//
    else if (convert === "octal") {
        if (to === "binary") {
            outputResult.value = parseInt(inputNumber,8).toString(2);
        } else if (to === "decimal") {
            outputResult.value = parseInt(inputNumber, 8);
        } else if (to === "hexadecimal") {
            outputResult.value = parseInt(inputNumber,8).toString(16).toUpperCase();
        } else {
            outputResult.value = "Invalid Output Base";
        }
    } 
    
    //*hexa*//
    else if (convert === "hexadecimal") {
        if (to === "binary") {
            outputResult.value = parseInt(inputNumber, 16).toString(2);
        } else if (to === "decimal") {
            outputResult.value = parseInt(inputNumber, 16);
        } else if (to === "octal") {
            outputResult.value = parseInt(inputNumber, 16).toString(8);
        } else {
            outputResult.value = "Invalid Output Base";
        }
    } else {
        outputResult.value = "Invalid Input Base";
    }
}