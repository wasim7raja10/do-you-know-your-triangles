import { useState } from "react";

export default function CalculateArea() {
  const [dimension, setDimension] = useState({
    base: "",
    height: "",
  });
  const [area, setArea] = useState("");

  function inputHandler(e) {
    setDimension({
      ...dimension,
      [e.target.name]: e.target.value,
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    const area = (1/2 * Number(dimension.base) * Number(dimension.height)).toFixed(2)
    setArea(area)
  }
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="base">
          Base
          <input
            onChange={inputHandler}
            value={dimension.base}
            type="number"
            name="base"
            id="base"
          />
        </label>
        <label htmlFor="height">
          Height
          <input
            onChange={inputHandler}
            value={dimension.height}
            type="number"
            name="height"
            id="height"
          />
        </label>
        <button type="submit">Calculate Area</button>
      </form>
      <h3>{area}</h3>
    </>
  );
}
