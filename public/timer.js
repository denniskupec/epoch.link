/* 
epoch.link | rev. 2
(c) 2016, Dennis Kupec
MIT License
*/

(function() {

	var i = 0;
	var holder = document.getElementById('thetime');

	var setTimestamp = function() {
		i += 1;
		holder.innerText = Math.floor(Date.now() / 1000);
		document.title = "epoch.link | " + holder.innerText; 
	};

	setTimestamp();

	setInterval(setTimestamp, 1000);

	// index.html#delta<m> 
	// where m is minutes to wait between timer drift checks
	if(window.location.hash.includes("#delta")) {
		var m = parseFloat(window.location.hash.replace("#delta", ""));
			m = isNaN(m) ? 1 : m;

		console.info("drift check interval: " + m*1000*60);

		setInterval(function(){
			var d = Math.floor(Date.now() / 1000);
			var e = parseInt(holder.innerText);

			console.info({ i: i, now: d, el: e, delta: (d-e) });
		}, 1000*60*m);
	}

})();
