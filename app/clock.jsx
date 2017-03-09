import React from 'react';
import ReactDOM from 'react-dom';

class ReactClock extends React.Component {
    render() {
        return (
            React.createElement('div', {
                className: 'clock'
            }, 'This is a test')
        )
    }
}

React.render( < ReactClock / > , document.getElementById('react-clock-2'));



// old clock code ---
// function tick() {
//   const element = (
//     <div class="clock">
// 			<div class="glass"></div>
// 			<h1 id="main-clock">{new Date().toLocaleTimeString()}</h1>
// 		</div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);
