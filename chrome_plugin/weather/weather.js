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
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.onerror = function () {
            console.log("request fails...");
    }

    xmlhttp.send(null);
}

function showWeather(result) {
    result = JSON.parse(result);
    var list = result.list;
    var table =
}