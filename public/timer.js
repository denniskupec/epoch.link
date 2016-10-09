(function() {

	var holder = document.getElementById('thetime');

	var setTimestamp = function() {
		holder.innerText = Math.floor(Date.now() / 1000);
		document.title = "epoch.link | " + holder.innerText;
	};

	setTimestamp();

	/* Not like this has to be accurate to the millisecond... */

	var interval = setInterval(setTimestamp, 990);

	/* Every time you shim for an old browser, a whale is hunted. */

})();
