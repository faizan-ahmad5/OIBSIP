function convertTemperature() {
    var temp = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var newTemp;

    if (isNaN(temp)) {
        alert("Enter a valid number.");
        return;
    }

    if (unit === "celsius") {
        newTemp = (temp * 9 / 5) + 32;
        document.getElementById("result").innerHTML = temp + " C = " + newTemp.toFixed(2) + " F";
    } else if (unit === "fahrenheit") {
        newTemp = (temp - 32) * 5 / 9;
        document.getElementById("result").innerHTML = temp + " F = " + newTemp.toFixed(2) + " C";
    } else if (unit === "kelvin") {
        newTemp = temp - 273.15;
        document.getElementById("result").innerHTML = temp + " K = " + newTemp.toFixed(2) + " C";
    }
}