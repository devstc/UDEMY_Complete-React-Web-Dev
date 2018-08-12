
let visibility = false;


const onBtnClick = () => {
	visibility = !visibility;

	renderDOM();
};


const renderDOM = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={onBtnClick}>{visibility ? "Hide Details" : "Show Details"}</button>
			{visibility && <p>This is some data.</p>}
		</div>
	);
	ReactDOM.render(template, document.getElementById("app"));
};


renderDOM();