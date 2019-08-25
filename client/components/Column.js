import React from "react";
import Card from "./Card";

const Column = props => (
  <div className="column">
    <h2>{props.status}</h2>
    <div>
      <Card />
    </div>
    {/* render cards here */}
  </div>
);

export default Column;
