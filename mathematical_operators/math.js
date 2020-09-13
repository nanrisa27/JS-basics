function BMI() {
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    var bmi = w / (h / 100 * h / 100);
    document.getElementById("result").innerHTML = "Your BMI is :" + bmi;
    document.getElementById("result2").innerHTML = "reslt"



}
var reslt = BMI
if (reslt < 18.5) {
    document.getElementById("result2").innerHTML = "you are underweight"


}
else if (reslt => 18.5 && reslt <= 24.9) {
    document.getElementById("result2").innerHTML = " Normal or Healthy Weight"

}

if (reslt > 25.0 && reslt <= 29.9) {
    document.getElementById("result2").innerHTML = "overweight"

}
else {
    reslt > 29.9
    document.getElementById("result2").innerHTML = "obese"
}