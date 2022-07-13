import React, { useState } from "react";

const BoxGenerator = (props) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewBox(color);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Box</h1>
      <input
        type="text"
        placeholder="Pick a color"
        onChange={(e) => setColor(e.target.value)}
        value={color}
      ></input>
      <input type="submit" value="Add" />
    </form>
  );
};

export default BoxGenerator;
