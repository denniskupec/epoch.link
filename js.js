
/* meh */

(function(){

	var lastSec;

	setInterval(function() {

		var date = Date.now();
		var dsec = Math.round(date / 1000);

		document.getElementById("display").innerHTML = date;

		if(dsec !== lastSec) {
			lastSec = dsec;

			window.location.replace("#  " + dsec);
			document.title = document.hasFocus() ? "epoch.link" : "T: " + dsec;
		}

	}, 10);

})();