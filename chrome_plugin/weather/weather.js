// ==============================
// input your key first!!!
var key = 'da219e92bac54685bc50b0286c938c15';


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
    var list = result.HeWeather6[0].daily_forecast;
    var table = '<table>';
    table += '<tr><th>date</th><th>weather</th><th>min_tmp</th><th>max_tmp</th></tr>';
    for(var i in list){
        table += "<tr>";
        table += ('<td>' + list[i].date + '</td>');
        table += ('<td>' + list[i].cond_txt_d + '</td>');
        table += ('<td>' + list[i].tmp_min + '</td>');
        table += ('<td>' + list[i].tmp_max + '</td>');
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city?city:'beijing'
var url= 'https://free-api.heweather.com/s6/weather/forecast?location=' + city + '&key=' + key;
httpRquest(url, showWeather);