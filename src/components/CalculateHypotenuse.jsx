import { useState } from "react";

export default function CalculateHypotenuse() {
  const [hypo, setHypo] = useState("");
  const [dimension, setDimension] = useState({
    base: "",
    height: "",
  });
  function inputHandler(e) {
    setDimension({
      ...dimension,
      [e.target.name]: e.target.value,
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    const hypo = Math.sqrt(
      Number(dimension.base) ** 2 + Number(dimension.height) ** 2
    ).toFixed(2);
    setHypo(hypo);
  }
  return (
    <>
      <form onSubmit={submitHandler}>
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
        <button type="submit">Calculate Hypotenuse</button>
      </form>
      <h3>{hypo}</h3>
    </>
  );
}
