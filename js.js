
/* meh */

(function(){

	setInterval(function() {

		var date = display.innerHTML = Date.now().toString().slice(0, 10);

		document.getElementById("display").innerHTML = date;

		window.location.replace("#  " + date);

		document.title = document.hasFocus() ? "epoch.link" : "T: " + date;

	}, 100);

})();