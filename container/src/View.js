import React from "react";
import { useState, useContext } from "react";
import { WidgetContext } from "widget/WidgetIndex";

const View = () => {
  const { showWidget, setShowWidget } = useContext(WidgetContext);

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setShowWidget(!showWidget);
  };

  return (
    <div className="container">
      <h1>Hello Module Federation</h1>
      <p>Counter: {counter}</p>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Add 1</button>
      </div>
      <div>
        <button onClick={handleClick}>Interact width widget!</button>
      </div>
    </div>
  );
};

export default View;
