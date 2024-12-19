// Question 3
var array_of_obj = [];
console.log(array_of_obj);
var add_task = document.querySelector("#add_task");
var task = document.querySelector("#task");
var arr = [];

/* In Question 3, I tried so much when I click on done button (after I created beside li element and you will see that in the browser)
but there's a logical error I tried to know and I solved the task from my previous information (online course) and maybe there maybe missing in my info on wednesday lecture. I did my best in this next button attached with its listener.
*/
// I only did the first point in the third task fully correct.
add_task.addEventListener("click", function () {
    var li = document.createElement("li");
    var button = document.createElement("BUTTON");
    arr.push(button);
    button.id = 'done';
    button.innerText = "done";
    button.style.marginLeft = "30px";
    li.textContent = task.value;
    document.querySelector("#list").appendChild(li).appendChild(button);
    task.value = '';
    var obj = {'name': li.textContent, 'status': ''};
    array_of_obj.push(obj);
    console.log(arr);
});
