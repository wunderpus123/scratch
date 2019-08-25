import React from "react";

const logEvent = (event, props) => {
  event.preventDefault();
  props.addProject();
};

const Sidebar = props => (
  <div id="sidenav">
    <button>+</button>
    <h2>Projects:</h2>
  </div>
);

export default Sidebar;
