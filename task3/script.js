function convertTemperature() {
    const inputTemperature = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    const convertedResult = document.getElementById("convertedResult");

    if (isNaN(inputTemperature)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    let convertedTemp;
    let unitSymbol;

    if (selectedUnit === "celsius") {
        convertedTemp = (parseFloat(inputTemperature) * 9/5) + 32;
        unitSymbol = "°F";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemp = (parseFloat(inputTemperature) - 32) * 5/9;
        unitSymbol = "°C";
    // Uncomment the following section for the extra challenge
    // } else if (selectedUnit === "kelvin") {
    //     convertedTemp = parseFloat(inputTemperature) + 273.15;
    //     unitSymbol = "K";
    } else {
        alert("Invalid unit selection.");
        return;
    }

    convertedResult.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${unitSymbol}`;
}
