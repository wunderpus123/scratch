import React from "react";
import Card from "./Card";

const Column = props => {
  let tasksToRender = [];
  if (props.tasks !== undefined) {
    tasksToRender = props.tasks.map(function(val, idx) {
      return (
        <Card
          title={val.title}
          owner={val.owner}
          updateStatus={props.updateStatus}
          key={"card" + idx}
        />
      );
    });
  }

  return (
    <div className="column">
      <h2>{props.header}</h2>
      <div>{tasksToRender}</div>
    </div>
  );
};

export default Column;
