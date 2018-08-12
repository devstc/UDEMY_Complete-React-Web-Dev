const app = {
  title: "Indecision App",
  subtitle: "Let A Computer Decide",
  // options: ["One", "Two", "Three", "Four"],
  options: [],
  pickedOption: ""
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderDOM();
  }
};

const onClickWhatDo = () => {
  const num = Math.floor(Math.random() * app.options.length);
  console.log(num);
  const randomOption = app.options[num];
  app.pickedOption = randomOption;
  renderDOM();
};

const onClickRemoveAll = () => {
  app.options = [];
  app.pickedOption = "";
  renderDOM();
}


const appRoot = document.getElementById("app");

const renderDOM = () => {
  const template1 = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <h3>Here are your options:</h3> : <h3>No options.</h3>}
      
      <button disabled={app.options.length === 0} onClick={onClickWhatDo}>What Should I Do?</button>
      <button onClick={onClickRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      
      <p>{app.pickedOption}</p>
    </div>
  );
  ReactDOM.render(template1, appRoot);
};

renderDOM();