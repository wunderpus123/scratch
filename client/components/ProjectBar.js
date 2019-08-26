import React from "react";

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
