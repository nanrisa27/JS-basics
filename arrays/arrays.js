
//display the numbers in the array
var numbers = [
    4, -5, -2, 7, 15, -9, 0, 6, 7, 2
]
for (var i = 0; i < numbers.length; i++) {
    console.log((i + 1) + '. ' + 'number' + ' ' + numbers[i])
}


//swaping numbers in the array
list = [4, -5, -2, 7, 15, -9, 0, 6, 7, 2]
list[2] = [list[6], list[6] = list[2]][0]
console.log(list);

// calculating the total sum of numbers in the array
// use reduce method

var sum = numbers.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(sum);

//findiding the average is simply dividing the total sum by the length

function getAvg(numbers) {
    return sum / numbers.length
};
const average = getAvg(numbers);
console.log(average);

//the smallest number in the array
//use spread operator, When we use the spread operator within Math.min() 
//it will expand, or spread out, our array and insert each variable as a separate parameter

function arrMin(numbers) {
    return Math.min(...numbers);
}
const minimum = arrMin(numbers)
console.log(minimum);

//Counting the occurrences or frequency of array elements




//printing results in a particular range in this case before zero standard Es6

function Range(start, end) {
    return numbers(end - start + 1).fill().map((_, idx) => start + idx)
}
var result = Range(4, 0);
console.log(result);


function lotoNumbers() {
    var lotto = [];

    //here we make a simple for Loop

    for (var i = 0; i < 7; i++) {

        //here we generate a random number from 0 to 40
        var temp = Math.floor(Math.random() * 40);

        //here we use the indexof function basicly if the function does not find somthing it return -1
        if (lotto.indexOf(temp) == -1) {
            // we dont want numbers that are duplicate
            //so if there is a unique number instert it
            lotto.push(temp);
            //here we output the generated number to each of the circles
            document.getElementById("num" + i).innerHTML = lotto[1];

        }
        else {
            // if we have a duplicATE DECREASE the i variable and generate another random number
            i--;
        }
    }
}
