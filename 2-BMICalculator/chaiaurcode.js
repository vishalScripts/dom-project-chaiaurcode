const btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", calculate);

function calculate() {
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");

    //convert height int0 meters
    var heightInMeter = height.value / 100;

    //calculate BMI
    var bmi = (weight.value / (heightInMeter * heightInMeter)).toFixed(1);

    //Showing the calculation
    showResult(bmi);

    //reset
    height.value = "";
    weight.value = "";
}

function showResult(bmi) {
    const result = document.getElementById("results");
    result.innerHTML = "";
    result.innerHTML = bmi;
    if (bmi < 18.6) {
        result.innerHTML = `${bmi} <br> Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `${bmi} <br> Normal Range`;
    } else {
        result.innerHTML = `${bmi} <br> Overweight`;
    }
}
