import React from "react";
import Input from "./Input";

export default class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClear = this.onClear.bind(this);

    this.state = {
      name: "",
      age: "",
      city: ""
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onCityChange(event) {
    this.setState({ city: event.target.value });
  }

  onAgeChange(event) {
    this.setState({ age: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const formOutput = `Name: ${this.state.name}
Wohnort: ${this.state.city}
Jahre: ${this.state.age}`;

    const description =
      this.state.name && this.state.city && this.state.age
        ? `\n\n${this.state.name} ist ${
            this.state.age
          } Jahre alt und kommt aus ${this.state.city}`
        : "";

    alert(formOutput + description);
  }

  onClear(event) {
    event.preventDefault();
    this.setState({ name: "", city: "", age: "" });
  }

  render() {
    return (
      <>
        <h1>My React Form</h1>
        <form onSubmit={this.onSubmit}>
          <Input
            title="Name"
            type="text"
            handleChange={this.onNameChange}
            value={this.state.name}
            placeholder={"Namen eingeben"}
          />
          <Input
            title="Wohnort"
            type="text"
            handleChange={this.onCityChange}
            value={this.state.city}
            placeholder={"Wohnort eingeben"}
          />
          <Input
            title="Alter"
            type="text"
            handleChange={this.onAgeChange}
            value={this.state.age}
            placeholder={"Alter eingeben"}
          />

          <button onClick={this.onSubmit}>Submit</button>
          <button onClick={this.onClear}>Clear</button>
        </form>
      </>
    );
  }
}
