let convertToKilo = () => {
    let weightVal = parseInt(document.getElementById("initial-weight").value);
    let weightConvert = (weightVal / 2) - (1 / 10);
    document.getElementById("kg-weight").innerHTML = "Your weight in kilograms is ";
    document.getElementById("kg-weight").append(weightConvert);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit-weight").addEventListener('click', convertToKilo);
})