import React, { Component } from "react";
import { connect } from "react-redux";
import Column from "../components/Column";
import * as actions from "../actions/actions.js";

const mapStateToProps = store => ({
  tasks: store.tasks.tasksList
});

const mapDispatchToProps = dispatch => ({
  updateStatus: (title, newStatus) => {
    dispatch(actions.updateStatus(title, newStatus));
  }
});

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
        <Column
          header="To Do"
          tasks={todoTasks}
          updateStatus={this.props.updateStatus}
        />
        <Column
          header="In Progress"
          tasks={inProgressTasks}
          updateStatus={this.props.updateStatus}
        />
        <Column
          header="Done"
          tasks={doneTasks}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer);
