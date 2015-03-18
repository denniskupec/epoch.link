
/* meh */

function epoch()
{
	var date = display.innerHTML = Date.now().toString().slice(0, 10);

	document.getElementById("display").innerHTML = date;
	window.location.replace("#  " + date);

	return date;
}

window.onload = function(){

	epoch();
	setInterval(epoch, 500);

	window.addEventListener("focus", function() {
		document.title = "epoch.link";
	});

	window.addEventListener("blur", function() {
    	document.title = "T: " + epoch();
	});

};
