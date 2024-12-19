// Question 1
var username = document.querySelector("#username");
var password = document.querySelector("#password");
var button = document.querySelector("#button");
// Part of Question 2
var number1 = document.querySelector("#username");
var number2 = document.querySelector("#password");

button.addEventListener("click", function () {
    var form = document.querySelector("form");
    var h6 = document.querySelector("h6");
    if (username.value == 'admin' && password.value == '123') {
        form.innerHTML = "Welcome, You're registered.";
        h6.innerHTML = "";
    } else {
        form.innerHTML = "You're not registered.";
        h6.innerHTML = "";
    }
// Question 2
    var str1 = `${number1.value}`;
    var str2 = `${number2.value}`;
    var arr1 = [];
    for (var i = 0; i <= str1.length; i++) {
        if (str1.charAt(i) == ',' || i == str1.length) {
            arr1.push(parseInt(str1.charAt(i - 1)));
        }
    }
    for (var i = 0; i <= str2.length; i++) {
        if (str2.charAt(i) == ',' || i == str2.length) {
            arr1.push(parseInt(str2.charAt(i - 1)));
        }
    }

    for (var i = 0; i < arr1.length; i++) {
        for (var j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j]) {
                arr1.splice(arr1[j], 1);
                break;
            }
        }
    }
    console.log(arr1);

});
