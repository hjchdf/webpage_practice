function httpRquest(url, callback) {
    var xmlhttp;
    // Browser compatible
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(true);
        }
    }

    xmlhttp.onerror = function () {
        callback(false);
    }

    xmlhttp.send(null);
}

setInterval(function () {
    httpRquest("https://www.baidu.com/", function (status) {
        chrome.browserAction.setIcon({
            path: (status?'iconGreen.png':'iconRed.png')
        });
    });
}, 1000);