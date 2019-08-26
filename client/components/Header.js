import React from "react";

const logEvent = (event, props) => {
  event.preventDefault();
  props.addTask(
    document.querySelector("#taskTitle").value,
    document.querySelector("#taskOwner").value
  );
};

const Header = props => (
  <div id="header">
    <h2>{props.projectTitle}</h2>
    <form>
      Title:
      <input type="text" id="taskTitle" />
      <br></br>
      Owner:
      <input type="text" id="taskOwner" />
      <br></br>
      <input
        type="submit"
        value="Add Task"
        onClick={event => logEvent(event, props)}
      />
    </form>
  </div>
);

export default Header;
