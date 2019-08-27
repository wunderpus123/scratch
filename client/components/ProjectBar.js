import React from "react";

// Component was ultimately not used, but should a user have multiple projects, on login, a list of those projects would be rendered by this component
const Projects = props => {
  let projectsToRender = [];
  if (props.projects) {
    projectsToRender = props.projects.map(function(val, idx) {
      return (
        <a href="" key={"project" + idx}>
          {val.name}
        </a>
      );
    });
  }
  return (
    <div id="sidenav">
      <h2>Projects:</h2>
      <div>{projectsToRender}</div>
      <br></br>
      <br></br>
      <form>
        Project Name:<input type="text" id="newProjectName"></input>
        <br></br>
        <input type="submit" value="Add Project" />
      </form>
    </div>
  );
};

export default Projects;
