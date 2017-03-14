import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

class ReactClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  tick(ev) {
    this.setState({ time: ev.target.value })
  }

  render() {
    return (
      <Clock time={ this.state.time } className='main-clock' />
    )
  }
}

ReactDOM.render(<ReactClock /> , document.getElementById('react-clock-2'));



// old, but working-ish, clock code
function tick() {
  const element = (
    <div className="clock">
			<div className="glass"></div>
			<h1 className="main-clock">{new Date().toLocaleTimeString()}</h1>
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
