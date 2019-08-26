import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import ProjectBar from "../components/ProjectBar";
import TasksContainer from "./TasksContainer";
import * as actions from "../actions/actions.js";

const mapStateToProps = store => ({
  projects: store.tasks.projectsList
});

const mapDispatchToProps = dispatch => ({
  addTask: (title, owner) => {
    dispatch(actions.addTask(title, owner));
    
  }
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <ProjectBar projects={this.props.projects} />
        <Header addTask={this.props.addTask} projectTitle={"My Project"} />
        <TasksContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
