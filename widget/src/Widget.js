import React from "react";
import { useEffect } from "react";

const Widget = () => {
  useEffect(() => console.log("widget rendered"));
  return (
    <div className="widget">
      <p>Module Title!</p>
      <div>
        <h3>Recommendation title</h3>
        <p>Recommendation info description</p>
      </div>
    </div>
  );
};

export default Widget;
