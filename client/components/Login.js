import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {} //we can remove it
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //handlechange grabs all of the data from input fields
  handleChange(event) {
    console.log("event.value", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + " .... ");
    event.preventDefault();
    //needs to be connected to the redux store
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="password"
              placeholder="username"
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
