import React, { Component } from "react";
import { connect } from "react-redux";
import Column from "../components/Column";
import * as actions from "../actions/actions.js";

const mapStateToProps = store => ({
  tasks: store.tasks
});

const mapDispatchToProps = dispatch => ({});

class TasksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const taskList = this.props.tasks.tasksList;
    const todoTasks = taskList.filter(task => {
      return task.status === "todo";
    });
    return (
      <div className="tasksContainer">
        <Column header="To Do" tasks={todoTasks} />
        <Column header="In Progress" />
        <Column header="Done" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer);
