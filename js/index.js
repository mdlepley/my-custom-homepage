function startTime() {
	var today = new Date(),
	h = today.getHours(),
	m = today.getMinutes(),
	s = today.getSeconds(),
	clockEl = document.getElementById("main-clock");

	m = addLeadingZero(m);
	s = addLeadingZero(s);

	clockEl.innerHTML = h + " " + m + " " + s;

}

function addLeadingZero(i) {
	// add a zero in front of numbers < 10
	if (i<10)
	  {
	  	i="0" + i;
	  }
	return i;
}


(function(){
	setInterval(startTime, 500);
})();
