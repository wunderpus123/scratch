import React from "react";

const clickTodo = (event, props) => {
  event.preventDefault();
  props.updateStatus(props.id, "todo");
};

const clickInProgress = (event, props) => {
  event.preventDefault();
  props.updateStatus(props.id, "inProgress");
};

const clickDone = (event, props) => {
  event.preventDefault();
  props.updateStatus(props.id, "done");
};

const deleteCard = (event, props) => {
  event.preventDefault();
  props.deleteTask(props.id);
};

const Card = props => (
  <div className="card">
    <h3 id="taskTitle">{props.title}</h3>
    <p id="owner">Owner: {props.owner}</p>

    <div className="dropdown">
      <button className="dropbtn" class="w3-button w3-khaki w3-round">Status</button>
      <div className="dropdown-content">
        <a href="#" value="todo" onClick={event => clickTodo(event, props)}>
          To Do
        </a>
        <a
          href="#"
          value="inProgress"
          onClick={event => clickInProgress(event, props)}
        >
          In Progress
        </a>
        <a href="#" value="done" onClick={event => clickDone(event, props)}>
          Done
        </a>
      </div>
    </div>
    {/* <button> Edit </button> */}
    <button class="w3-button w3-red w3-round" onClick={event => deleteCard(event, props)}> Delete </button>
  </div>
);

export default Card;
