import React, { Component } from "react";
import { connect } from "react-redux";
// import Header from "../components/Header";
// import ProjectBar from "../components/ProjectBar";
// import TasksContainer from "./TasksContainer";
import * as actions from "../actions/actions";
import Sidebar from "../components/SideBar";

const mapStateToProps = store => ({});

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
<<<<<<< HEAD
        <ProjectBar projects={this.props.projects} />
        <Header addTask={this.props.addTask} projectTitle={"My Project"} />
        <TasksContainer  />
=======
        <Sidebar/>
        {/* <ProjectBar />
        <Header addTask={this.props.addTask} projectTitle={"Project #1"} />
        <TasksContainer /> */}
>>>>>>> dev
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
