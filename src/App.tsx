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
				<button className="error">Error</button>
				<br/>
				<button className="primary primary-disabled">Primary</button>
				<button className="secondary secondary-disabled">Secondary</button>
				<button className="warning warning-disabled">Warning</button>
				<button className="error error-disabled">Error</button>
			</section>
			<hr/>

		</div>
	);
}

export default App;