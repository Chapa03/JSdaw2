//Propiedades navegador
document.getElementById('lblCode').innerHTML = navigator.appCodeName;
document.getElementById('lblName').innerHTML = navigator.appName;
document.getElementById('lblVersion').innerHTML = navigator.appVersion;
document.getElementById('lblLang').innerHTML = navigator.languaje;
document.getElementById('lblPlatform').innerHTML = navigator.platform;
document.getElementById('lblAgent').innerHTML = navigator.userAgent;
document.getElementById('lblCookies').innerHTML = navigator.cookieEnabled;
document.getElementById('lblJava').innerHTML = navigator.javaEnabled();

//Objeto Screen
document.getElementById('screenALT').innerHTML = screen.height;
document.getElementById('screenALD').innerHTML = screen.availHeight;
document.getElementById('screenANT').innerHTML = screen.width;
document.getElementById('screenAND').innerHTML = screen.availWidth;