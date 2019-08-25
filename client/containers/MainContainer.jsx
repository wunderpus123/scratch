import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TasksContainer from "./TasksContainer";

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Header projectTitle={"Project #1"} />
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
