
/* meh */

(function(){

	setInterval(function() {

		var date = Math.round(Date.now() / 1000);

		document.getElementById("display").innerHTML = date;

		window.location.replace("#  " + date);

		document.title = document.hasFocus() ? "epoch.link" : "T: " + date;

	}, 100);

})();