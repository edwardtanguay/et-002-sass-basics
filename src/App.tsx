import { useState } from 'react';
import './styles/App.scss';

function App() {
	const [isDisabled, setIsDisabled] = useState(false);

	// const handleToggleDisabled = () => {
	// 	setIsDisabled(!isDisabled);
	// };

	// const getDisabledClass = () => {
	// 	// return `primary ` + `primary-disabled`; //isDisabled ? 'primary-disabled' : '';
	// 	return !isDisabled ? 'primary' : 'primary primary-disabled';
	// 	// return 'primary';
	// 	// return 'primary primary-disabled';
	// }
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
				<hr />
				<p>{isDisabled ? 'currently disabled' : 'currently enabled'}</p>
				<button onClick={() => setIsDisabled(!isDisabled)}>
					Toggle Disabled
				</button>
				<hr />
				<button className={!isDisabled ? 'primary' : 'primary primary-disabled'}>Primary</button>
				{/* <button className={`primary primary-disabled`}>Primary</button> */}
				<button className={!isDisabled ? 'secondary' : 'secondary secondary-disabled'}>Secondary</button>
				<button className={!isDisabled ? 'warning' : 'warning warning-disabled'}>Warning</button>
				<button className={!isDisabled ? 'error' : 'error error-disabled'}>Error</button>
				<button className={!isDisabled ? 'info' : 'info info-disabled'}>Info</button>
			</section>
			<hr />
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
