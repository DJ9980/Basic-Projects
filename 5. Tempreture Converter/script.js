const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("convertToFahrenheit");
const toCelcius = document.getElementById("convertToCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    event.preventDefault();
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a Unit";
    }
}
