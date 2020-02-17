//Problem 1
// let name = prompt("What is your name?");
// let time = prompt("What time of day is it?");

// if (time == "morning" || time == "Morning") {
//     alert("Good morning " + name);
// }
// else if (time == "night" || time == "Night") {
// alert("Good evening " + name);
// }

//Problem 2
// let num1 = parseInt(prompt("Enter a number"));
//  let num2 = parseInt(prompt("Enter another number"));

//  let diff = num2 - num1;

//  if (diff >= 10) {
//      alert("The difference of " + num1 + " and " + num2 + " is 10 or greater");
//  }

//  else {
//      alert("The difference of " + num1 + " and " + num2 + " is " + diff);
//  }

//Problem 3
let returningUser = "Kenn";
let num = 10;

let numGuess = prompt("Guess a number");
let name = prompt("Enter your name");

if (numGuess == num && name !== returningUser) {
    alert("Right number, wrong user");
}
else if (numGuess == num && name == returningUser) {

    alert("Right number, right user");
}

else {
    alert("Wrong number, right user");
}