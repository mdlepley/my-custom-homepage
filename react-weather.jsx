import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.component {
  render () {
    return <p>Hello, React!</p>;
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
