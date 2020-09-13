
/*$(document).ready(function () {
    $("#age").focus();
    $("#go").click(function () {
        age = $("#age").val();*/

var age = prompt("what is your age");

if (age < 18) {

    alert("sorry you are too young");

}
else if (age <= 27) {

    alert("right age for military service")

}
if (age > 27 && age < 41) {
    alert(" you are in reserve")

}
else if (age > 41 && age <= 55) {

    alert("you are in backup reserve");
}

else {
    age > 55
    alert("You are too old")

}









