import React from "react";

const Sidebar = props => (
  <div id="sidenav">
    <h2>Projects:</h2>
    <form>
      Project Name:<input type="text" id="newProjectName"></input>
      <br></br>
      <input type="submit" value="Add Project" />
    </form>
  </div>
);

export default Sidebar;
