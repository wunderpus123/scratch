import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actions";
import Sidebar from "../components/SideBar";

const mapStateToProps = store => ({
  tasks: store.tasks.tasksList
});

const mapDispatchToProps = dispatch => ({
  addTask: (title, owner) => {
    dispatch(actions.addTask({ title, owner }));
  }
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Sidebar addTask={this.props.addTask} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
