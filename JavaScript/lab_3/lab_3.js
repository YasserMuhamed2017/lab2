// Question 1
var car = {brand: "BMW", model: 500, year: 2024, display: function() {console.log(car.brand, car.model, car.year)}} 
car.display()

// Question 2
for (var pair in car) {
    console.log(pair + " ==> " + car[pair]);
}

// Question 3
var obj = {x: 5, y: 6};
function fun (obj) {
    var obj2 = new Object();
    for (var key in obj) {
        obj2[obj[key]] = key;
        console.log(obj2);
    }
    
}
fun (obj);

// Question 4
var obj1 = {x: 4, y: 6};
var obj2 = {z: 5, y: 5};
var new_object = new Object();
for (var key1 in obj1) {
    new_object[key1] = obj1[key1];
    for (var key2 in obj2) {
        if (key2 == key1) {
            new_object[key2 + "_1"] = obj2[key2];
            break;
        }
        new_object[key2] = obj2[key2];
    }
}
console.log(new_object);

// Question 5
var person = {address: {city: "Cairo", street_no: 30}, job: {title: "Software Engineer", location: "New Cairo"}, display: function() {console.log(person.address.city, person.address.street_no, person.job.title, person.job.location)}};
person.display()

// Question 6
var people = [{fname: 'Yasser', lname: 'Mohamed', age: 29}, {fname: 'Ahmed', lname: 'Salem', age: 20}];

people.sort(function(a, b){return a.age - b.age});
console.log(people);

// Question 7
var numbers = [1, 5, 0, 50, 4];
var max = 0;
for (var i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
}
console.log(max);

var min = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(min);

// Question 8
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
}

console.log(arr);

// Question 9
function operation() {
    var first = parseInt(prompt("First Number:"));
    var op = prompt("Enter Operation:");
    var second = parseInt(prompt("Second Number:"));
    var result;
    if (op == "sum") {
        result = first + second;
    } else if (op == "multi") {
        result = first * second;
    } else if (op == "subtract") {
        result = first - second;
    } else if (op == "division") {
        result = first / second;
    } else {
        console.log("Invalid Input.");
        return 0;
    }
    alert("Result = " + result);
}

operation();

// Question 10
function check() {
    var username = prompt("Username:");
    var password = prompt("Password: ");
    if (username == "admin" && password == "421$$") {
        alert("Welcome login success");
    } else {
        alert("Username/Password is invalid.")
    }
}

check();

// Question 11
function guess() {
    var program = Math.floor(Math.random() * 10);
    var user_guess = parseInt(prompt("Guess a number from 0-9:"));
    if (program == user_guess) {
        alert("You guessed the correct number");
    } else {
        alert(`Not correct. Program guessed number ${program}`);
    }
}
guess();

// Question 12
var objs = [{product_name: 'hp', product_price: 122}, {product_name: 'Dell', product_price: 199}];
function array_of_objects(objs) {
    objs.forEach(obj => {
        obj["discountedPrice"] = parseFloat((obj.product_price * 0.70).toFixed(2));
    });
    console.log(objs);
}

array_of_objects(objs);

// Question 13
var date = prompt("Enter Birthdate in this format\nDD – MM – YYYY");
function validate() {
    if (date.charAt(2) == '-' && date.charAt(5) == '-' && date.length == 10) {
        var year = date.substring(6);
        var month = date.substring(3, 5);
        var day = date.substring(0, 2);
        var format_date = new Date(year, month, day);
        console.log(format_date);
    } else {
        alert("Wong Date Format");
    }
}
validate();

// Question 14
var date2 = new Date("1995-11-16")
var arr_of_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayName(date2) {
    var dayName = date2.getDay();
    console.log(arr_of_days[dayName]);
}


dayName(date2);