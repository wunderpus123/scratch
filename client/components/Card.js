import React from "react";

const Card = props => (
  <div className="card">
    <h3 id="taskTitle">{props.title}</h3>
    <p id="owner">Owner: {props.owner}</p>

    <div className="dropdown">
      <button className="dropbtn">Status</button>
      <div className="dropdown-content">
        <a href="#" value="todo">
          To Do
        </a>
        <a href="#" value="inProgress">
          In Progress
        </a>
        <a href="#" value="done">
          Done
        </a>
      </div>
    </div>
  </div>
);

export default Card;
