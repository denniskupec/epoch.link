/* 
epoch.link | rev. 2
(c) 2016, Dennis Kupec
MIT License
*/

(function() {

	var holder = document.getElementById('thetime');

	var setTimestamp = function() {
		holder.innerText = Math.floor(Date.now() / 1000);
		//holder.innerText = parseInt(holder.innerText) + 1;
		document.title = "epoch.link | " + holder.innerText; 
	};

	setTimestamp();

	setInterval(setTimestamp, 1000);

})();
