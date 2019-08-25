import React from "react";

const Header = props => (
  <div id="header">
    <h2>{props.projectTitle}</h2>
    <form>
      Title:
      <input type="text" id="title" />
      <br></br>
      Owner:
      <input type="text" id="owner" />
      <br></br>
      <input type="submit" value="Add Task" />
    </form>
    {/* <button>New Task</button> */}
  </div>
);

export default Header;
