// Question 1
var x = parseInt(prompt("Number:"));
if (x > 0) {
    console.log("Number is positive.")
} else if (x < 0) {
    console.log("Number is negative.")
} else {
    console.log("Number is zero.")
}

// Question 2
var confirmation = confirm("Do you want to proceed?");
if (confirmation) {
    alert("You chose to proceed");
}
else {
    alert("Action canceled.");
}

// Question 3
var num = 10;
num % 2 === 0? console.log("hi") : console.log("hello");

// Question 4
var age = parseInt(prompt("Enter your age:"));
if (age < 0) {
    console.log("Invalid Input.");
}

do {
    if (age >= 1 && age <= 10) {
        alert("Child");
    } else if (age >= 11 && age <= 18) {
        alert("Teenager");
    } else if (age >= 19 && age <= 50) {
        alert("Grown up");
    } else if (age > 50) {
        alert("Old");
    }
    var age = parseInt(prompt("Enter another age:"));
    var input = confirm(`is this ${age}`);
} while(input);

// Question 5
var str = prompt("Enter a string:");
var a = 0, e = 0, o = 0, u = 0, I = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] == 'a') {
        a++;
    }
    else if (str[i] == 'e') {
        e++;
    } else if (str[i] == 'o') {
        o++;
    } else if (str[i] == 'u') {
        u++;
    } else if (str[i] == 'i') {
        I++;
    }
}

console.log(`a = ${a}, e = ${e}, o = ${o}, u = ${u}, i = ${I}`);

// Question 6
var hour = parseInt(prompt("Enter hour:"));
if (hour > 23) {
    console.log("Error: hour shouldn't be exceeded 23.");
} else if (hour < 0){
    console.log("Error: hour shouldn't be negative.");
}
if (hour <= 12) {
    if (hour === 0) {
        console.log("12AM")
    } else {
        console.log(`${hour}AM`);
    }
}
else if (hour < 24) {
    var hour = hour - 12;
    console.log(`${hour}PM`);
}

// Question 7
var str = prompt("Enter a word:");
console.log(str.charAt(0).toUpperCase() + str.substring(1));

// Question 8
var color = prompt("Enter favorite color:");
var confirm_color = confirm(`You chose ${color}. Is that correct?`);
if (confirm_color) {
    alert("Great choice!");
} else {
    console.log("Let's try again.");
}

// Question 9
var password = "yasser";
var correct = true;
do {
    var user_password = prompt("Enter password:");
    if (password == user_password) {
        correct = false;
    }
} while (correct);

// Question 10
var date1 = new Date("2024-12-09");
var date2 = new Date("2024-12-07");
var time1 = date1.getTime() / (1000 * 3600 * 24);
var time2 = date2.getTime() / (1000 * 3600 * 24);
if (time1 < time2) {
    console.log("time1 is earlier.");
} else {
    console.log("time2 is earlier.")
}

// Question 11
console.log(time1 - time2);

// Question 12
var sum = 0;
for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);

// Question 13
var str = "Hello World!";
console.log(str.substring(6, str.length));

// Question 14
var number =  5.678;
console.log(number.toFixed(2))

// Question 15
var num = 50;
console.log(num % 3 == 0 && num % 5 == 0? true : false);