// Function to calculate BMI
function calculateBMI() {
    let weight = parseInt(document.getElementById('weight').value);
    let height = parseInt(document.getElementById('height').value); 
    let bmi = weight / (height * height);
    if(bmi<18){
        document.getElementById('result').innerHTML = "Your BMI is: " + bmi + "Underweight";
    }
    else if(18<bmi<24)
    {
        document.getElementById('result').innerHTML = "Your BMI is: " + bmi + "Normal weight";
    }
    else if(24<bmi<29) 
    {
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi + "Overweight";
    }
    else{
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi + "Obese";
}
}