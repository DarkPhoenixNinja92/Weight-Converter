let weightType;
let weightVal = parseInt(document.getElementById("initial-weight")).value;
let poundBtn = document.querySelector(".pounds");
let kiloBtn = document.querySelector(".kilos");
let weight = document.querySelector(".weight");

let convertToKilo = () => {
    let kiloConvert = (weightVal / 2) - (1 / 10);
    document.getElementById("kg-weight").innerHTML = "Your weight in kilograms is ";
    document.getElementById("kg-weight").append(kiloConvert);
}

let convertToPounds = () => {
    let poundConvert = (weightVal * 2) - (1 / 10);
    document.getElementById("kg-weight").innerHTML = "Your weight in kilograms is ";
    document.getElementById("kg-weight").append(poundConvert);
}

function unitSelection() {
    weightType = weight.textContent;
    console.log(weightType);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit-weight").addEventListener('click', convertToKilo);
})