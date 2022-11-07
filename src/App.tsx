import './styles/App.scss';

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<p>Welcome to this site.</p>
			<h2>Detailed Info</h2>
			<p>ksjdfksdjflsdfj sdkfj sdkj sdkfjd f</p>
			<h3>More Info</h3>
			<p>ksjdfksdjflsdfj sdkfj sdkj sdkfjd f</p>
			<section className="content">
				<p>This is a message in the content.</p>	
				<hr/>
				<button className="primary">Primary</button>
				<button className="secondary">Secondary</button>
				<button className="warning">Warning</button>
			</section>		
		</div>
	);
}

export default App;