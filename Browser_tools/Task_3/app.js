window.onload = function(){
	var count = document.getElementById('counter');
	var countVal = window.history.length;
	count.innerHTML = 'Pages visited: ' + countVal;
	
	var browser = document.getElementById('nav') || 0;
	if (window.navigator.userAgent.search('Chrome') != -1){
		browser.innerHTML = navigator.userAgent + '<br>' + navigator.appVersion;
	}
	else if (window.navigator.userAgent.search('MSIE') != -1){
		navigator.geolocation.getCurrentPosition(success);
		function success(position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			var browser = document.getElementById('nav') || 0;
			browser.innerHTML = navigator.platform + '<br>' + lat + '<br>' + lon;
		}
	}
	else if (window.navigator.userAgent.search('Mozilla') != -1){
		browser.innerHTML = navigator.appName + '<br>' + navigator.cookieEnabled;
	}
}
