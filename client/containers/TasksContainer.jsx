import React, { Component } from "react";
import { connect } from "react-redux";
import Column from "../components/Column";
import * as actions from "../actions/actions.js";

const mapStateToProps = store => ({
  tasks: store.tasks.tasksList
});

const mapDispatchToProps = dispatch => ({});

class TasksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const taskList = this.props.tasks;
    const todoTasks = taskList.filter(task => {
      return task.status === "todo";
    });
    const inProgressTasks = taskList.filter(task => {
      return task.status === "inProgress";
    });
    const doneTasks = taskList.filter(task => {
      return task.status === "done";
    });
    return (
      <div className="tasksContainer">
        <Column header="To Do" tasks={todoTasks} />
        <Column header="In Progress" tasks={inProgressTasks} />
        <Column header="Done" tasks={doneTasks} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer);
