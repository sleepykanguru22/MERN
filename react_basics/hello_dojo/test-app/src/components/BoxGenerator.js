import React, { useState } from "react";

const BoxGenerator = (props) => {
  const { boxPropertyArr, setBoxPropertyArr } = props;

  const [color, setColor] = useState("");
  const [size, setSize] = useState(50);

  const handleSubmit = (event) => {
    event.preventDefault();

    setBoxPropertyArr([
      ...boxPropertyArr,
      {
        color: color,
        size: size + "px"
      }
    ]);
    setColor("");
    setSize(50);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <div>
          <label>Color</label>
          <input
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default BoxGenerator;
