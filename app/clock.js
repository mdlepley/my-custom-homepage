function tick() {
  const element = (
    <div class="clock">
			<div class="glass"></div>
			<h1 id="main-clock">{new Date().toLocaleTimeString()}</h1>
		</div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
