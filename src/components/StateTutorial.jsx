import React, { useState } from "react";

const StateTutorial = () => {
  const [input, setInput] = useState("aninda");

  let onChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  return (
    <div>
      <h2>Learning useState</h2>
      <input placeholder="Enter Something..." onChange={onChange} />
      {input}
      <br/>
    </div>
  );
};

export default StateTutorial;
