var image_slide = document.querySelector("#imageslide");
var urls;
var http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        urls = JSON.parse(http.responseText);
        printUrls();
    }
}

http.open("GET", "https://jsonplaceholder.typicode.com/albums/1/photos");
http.send();
function printUrls() {
    console.log(urls);
}

var paragraph = document.querySelector("#p");
var imageIndex = 0;
var speed = 2000;
var play = document.querySelector("#play");
var stop = document.querySelector("#stop");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var speed_6x = document.querySelector("#speed_1x");
var speed_4x = document.querySelector("#speed_2x");
var speed_2x = document.querySelector("#speed_3x");

var start = setInterval(function () {
    imageslide.src = urls[imageIndex].url;
    paragraph.textContent = urls[imageIndex].title;
    imageIndex++;
    if (imageIndex > urls.length - 1) {
        imageIndex = 0;
    }
}, speed);


play.addEventListener("click", function () {
    console.log("Start");
    startSliding();
});

stop.addEventListener("click", function () {
    console.log("Stop");
    clearInterval(start);
});

prev.addEventListener("click", function () {
    imageIndex--;
    console.log(imageIndex);
    imageslide.src = urls[imageIndex].url;
    paragraph.textContent = urls[imageIndex].title;
})

next.addEventListener("click", function () {
    imageIndex++;
    console.log(imageIndex);
    imageslide.src = urls[imageIndex].url;
    paragraph.textContent = urls[imageIndex].title;
})

speed_6x.addEventListener("click", function () {
    speed = 6000;
    clearInterval(start);
    startSliding();
})

speed_4x.addEventListener("click", function () {
    speed = 4000;
    clearInterval(start);
    startSliding();
})

speed_2x.addEventListener("click", function () {
    speed = 2000;
    clearInterval(start);
    startSliding();
})

function startSliding () {
    setInterval(function () {
        imageslide.src = urls[imageIndex].url;
        paragraph.textContent = urls[imageIndex].title;
        if (imageIndex < urls.length - 1) {
            imageIndex++;
        } else {
            imageIndex = 0;
        }
    }, speed);
}
