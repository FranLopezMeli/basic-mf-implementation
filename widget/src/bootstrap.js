import React from "react";
import { createContext, useState } from "react";
import Widget from "./Widget";
import "./styles.css";

const WidgetContext = createContext();

const WidgetWrapper = ({ children }) => {
  const [showWidget, setShowWidget] = useState(true);

  return (
    <WidgetContext.Provider value={{ showWidget, setShowWidget }}>
      <>
        {children}
        {showWidget && <Widget />}
      </>
    </WidgetContext.Provider>
  );
};

export { WidgetContext, WidgetWrapper };
