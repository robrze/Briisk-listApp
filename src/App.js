import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    listArray: ["element 21", "element 22", "element 3"],
    value: ""
  };

  renderList = () => {
    const { listArray, value } = this.state;

    return listArray
      .filter(element => element.includes(this.state.value))
      .map(element => (
        <p className={value ? "Green" : "black"} key={element}>
          {element}
        </p>
      ));
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <label>
          search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <div className="App">{this.renderList()}</div>
      </div>
    );
  }
}

export default App;
