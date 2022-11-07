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
				<button className="info">Info</button>
				<br/>
				<button className="primary primary-disabled">Primary</button>
				<button className="secondary secondary-disabled">Secondary</button>
				<button className="warning warning-disabled">Warning</button>
				<button className="error error-disabled">Error</button>
				<button className="info info-disabled">Info</button>
			</section>
			<hr/>
			<h1 className="special">The H1</h1>
			<h2 className="special">The H2</h2>
			<h3 className="special">The H3</h3>
			<h4 className="special">The H4</h4>
			<h5 className="special">The H5</h5>
			<h6 className="special">The H6</h6>

		</div>
	);
}

export default App;