class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ["New York", "Chicago", "Nashville"]
    };
  }

  handleDeleteAllOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePickOption() {
      const num = Math.floor(Math.random() * this.state.options.length);
      const randomOption = this.state.options[num];
      alert(randomOption);
  }

  handleAddOption(option) {
    console.log(option);
  }

  render() {
  const titleName = "Indecision App";
  const subtitleName = "Let A Computer Decide";

    return (
      <div>
        <Header title={titleName} subtitle={subtitleName} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteAllOptions={this.handleDeleteAllOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}


class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}


class Action extends React.Component{

  render() {
    return (
    <div>
      <button
        disabled={!this.props.hasOptions}
        onClick={this.props.handlePickOption}
      >What should I do?</button>
    </div>
    );
  }
}


class Options extends React.Component {

  render() {
    return (
    <div>
      <ol>
        {this.props.options.map((option) =>
          <Option key={option} optionText={option} />
        )}
      </ol>
      <button onClick={this.props.handleDeleteAllOptions}>Remove All</button> 
    </div>
    );
  }
}



class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.optionText}</li>
      </div>
    );
  }
}



class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onAddOptionClicked = this.onAddOptionClicked.bind(this);
  }
  
  onAddOptionClicked(e) {
    e.preventDefault();
    const option = e.target.elements.getOption.value.trim();

    if(option) {
      this.props.handleAddOption(option);
    } else {
      alert("No input entered");
    }
  };

  render() {
    return (
    <div>
      <form onSubmit={this.onAddOptionClicked}>
        <label>Add An Option: </label>
        <input type="text" name="getOption" />
        <button type="submit">Add Option</button>
      </form>
    </div>
    );
  }

}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));