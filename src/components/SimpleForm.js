import React from 'react';

export default class SimpleForm extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //initialen State anlegen
        }
    }


    onSubmit(event) {
        event.preventDefault();

        const formOutput = `Name: ${this.state.name}
Wohnort: ${this.state.city}
Jahre: ${this.state.age}`;

        const description = (this.state.name && this.state.city && this.state.age) ? `\n\n${this.state.name} ist ${this.state.age} Jahre alt und kommt aus ${this.state.city}` : '';

        alert(formOutput + description)
    }

    render() {
        return <>
            <h1>My React Form</h1>
            <form onSubmit={this.onSubmit}>

                {/* Inputs mit Labels hier einfügen*/}

                <button onClick={this.onSubmit}>Submit</button>
                {/* Clear Button einfügen */}
            </form>
        </>

    }

}
