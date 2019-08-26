import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";


const mapStateToProps = state => {
  const { isLoggedIn, tasksList } = state.tasks;
  return { isLoggedIn, tasksList }
}

const mapDispatchToProps = (dispatch) => ({
  logInShowProjects: (credentials) => dispatch(actions.logInShowProjects(credentials))
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {} //we can remove it
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handlechange grabs all of the data from input fields
  handleChange(event) {
    console.log("event.value", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.logInShowProjects(this.state)
    // this.props.history.push('/')
    // alert("A name was submitted: " + " .... ");
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
              class="w3-input w3-border w3-round"
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="password"
              placeholder="username"
              onChange={this.handleChange}
              class="w3-input w3-border w3-round"
            />
          </label>

          <input type="submit" value="Submit" class="w3-button w3-teal w3-round" />
        </form>
      </div>
    );
  }
}

export default connect (null, mapDispatchToProps)(Login);