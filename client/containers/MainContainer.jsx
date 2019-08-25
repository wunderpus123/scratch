import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TasksContainer from "./TasksContainer";
import * as Actions from "../actions/actions";

const mapStateToProps = store => {};

const mapDispatchToProps = dispatch => ({});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 id="header">Scrum for life</h1>
        <Header />
        <Sidebar />
        <TasksContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
