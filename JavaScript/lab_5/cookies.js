function set_cookie() {
    document.cookie = "name=yasser; expires=Thu, 01 June 2025 00:00:00; path=/"
}

var c = document.cookie.split(";");
function get_cookie() {
    
    console.log(c)
}

function check_cookie(x) {
    c_1 = c[1].slice(6);
    if (c_1 == x) {
        console.log("Found.");
    } else {
        console.log("Not found.")
    }
    
}
