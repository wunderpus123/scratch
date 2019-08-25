import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import ProjectBar from "../components/ProjectBar";
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
        <ProjectBar />
        <Header projectTitle={"Project #1"} />
        <TasksContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
