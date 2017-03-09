import React from 'react';
import ReactDOM from 'react-dom';

class ReactClock extends React.Component {
    render() {
        return (
					<div className='clock'>
						This is a test.
					</div>
        )
    }
}

ReactDOM.render(<ReactClock /> , document.getElementById('react-clock-2'));



// old, but working-ish, clock code
function tick() {
  const element = (
    <div class="clock">
			<div class="glass"></div>
			<h1 class="main-clock">{new Date().toLocaleTimeString()}</h1>
		</div>
  );
  ReactDOM.render(
    element,
    document.getElementById('react-clock')
  );
}

//setInterval(startTime, 500);
setInterval(tick, 1000);




// var randomQuotes = [
// 	'What will you do today, Napoleon?'
// ];


// // old clock code
// function startTime() {
// 	var today = new Date(),
// 	h = today.getHours(),
// 	m = today.getMinutes(),
// 	s = today.getSeconds(),
// 	clockEl = document.getElementById("main-clock");
//
// 	m = addLeadingZero(m);
// 	s = addLeadingZero(s);
//
// 	clockEl.innerHTML = h + " " + m + " " + s;
//
// }
//
// function addLeadingZero(i) {
// 	// add a zero in front of numbers < 10
// 	if (i<10)
// 	  {
// 	  	i="0" + i;
// 	  }
// 	return i;
// }
//
//
