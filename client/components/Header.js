import React from "react";

const Header = props => (
  <div id="header">
    <button>+</button>
    <h2>{props.projectTitle}</h2>
  </div>
);

export default Header;
