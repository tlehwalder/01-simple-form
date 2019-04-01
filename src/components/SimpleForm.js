import React from "react";

export default class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h1>My React Form</h1>
        <form onSubmit={this.onSubmit}>
          {/* Inputs mit Labels hier einfügen*/}

          <button onClick={this.onSubmit}>Submit</button>
          {/* Clear Button einfügen */}
        </form>
      </>
    );
  }
}
