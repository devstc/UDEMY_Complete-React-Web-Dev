class VisToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
		this.state = {
			visibility: false
		}
	}

	handleVisibilityToggle() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			};
		})
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibilityToggle}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
				{this.state.visibility && <p>This is some data.</p>}
			</div>
		);
	}
}

ReactDOM.render(<VisToggle />, document.getElementById('app'));