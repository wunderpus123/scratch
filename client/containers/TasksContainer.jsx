import React, { Component } from "react";
import { connect } from "react-redux";
import Column from "../components/Column";

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

class TasksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tasksContainer">
        <Column status="To Do" />
        <Column status="In Progress" />
        <Column status="Done" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer);
