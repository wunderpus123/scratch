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
      <input type="text" id="taskTitle" class="w3-input w3-border w3-round" />
      <br></br>
      Owner:
      <input type="text" id="taskOwner" class="w3-input w3-border w3-round"/>
      <br></br>
      <input
        type="submit"
        value="Add Task"
        onClick={event => logEvent(event, props)}
        class="w3-button w3-teal w3-round"
      />
    </form>
  </div>
);

export default Header;
