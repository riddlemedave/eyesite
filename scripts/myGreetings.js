// function myGreetings()

document.cookie="username=Dave; path/index.html";

var x = document.cookie;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "Dave";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf('Dave') == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie() {
    var username=getCookie("Dave");
    if (username!="Dave") {
        alert("Welcome again " + Dave);
    }else{
        username = prompt("Please enter your name:", "Dave");
        if (username != "" && username != null) {
            setCookie("Dave", username, 365);
        }
    }
}