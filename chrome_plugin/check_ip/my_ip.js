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
        } else {
            callback("request fails...")
        }
    }

    xmlhttp.send(null);
}

httpRquest("http://pv.sohu.com/cityjson?ie=utf-8", function (ip) {
    document.getElementById("ip_div").innerText = ip;
    // console.log(ip)
});

// 上述API推荐使用方法，引入后直接调用返回变量
// e.g.
// <scripttype="text/javascript"src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js" charset="gb2312"></script>
//     <script type="text/javascript">
//     function ipmsg() {
//         var ss = remote_ip_info['country']  + remote_ip_info['province']+ remote_ip_info['city'];
//         document.getElementByIdx_x_x("<%=HiddenField1.ClientID %>").value = ss;
//
//     }
//     </script>