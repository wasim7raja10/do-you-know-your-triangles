import { useState } from "react";

export default function IsTraingle() {
  const [result, setResult] = useState("");
  const [resultSecond, setResultSecond] = useState("");
  const [angles, setAngles] = useState({
    angleOne: "",
    angleTwo: "",
    angleThree: "",
  });
  const [missingAngle, setMissingAngle] = useState("");
  function inputChangeHandler(e) {
    const value = e.target.value;
    setAngles({
      ...angles,
      [e.target.name]: value,
    });
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    const sum =
      Number(angles.angleOne) +
      Number(angles.angleTwo) +
      Number(angles.angleThree);
    if (
      sum === 180 &&
      Number(angles.angleOne) !== 0 &&
      Number(angles.angleTwo) !== 0 &&
      Number(angles.angleThree) !== 0
    )
      setResult("Its a valid triangle");
    else setResult("Its invalid triangle");
  }
  function onSecondSubmitHandler(e) {
    e.preventDefault();
    const sum = 45 + 55 + Number(missingAngle);
    if (sum === 180 && Number(missingAngle) !== 0)
      setResultSecond("Its a valid triangle");
    else setResultSecond("Its invalid triangle");
  }
  function missingAngleChangeHandler(e) {
    setMissingAngle(e.target.value);
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="angleOne">Angle 1</label>
          <input
            onChange={inputChangeHandler}
            type="number"
            value={angles.angleOne}
            name="angleOne"
            id="angleOne"
          />
        </div>
        <div>
          <label htmlFor="angleTwo">Angle 2</label>
          <input
            onChange={inputChangeHandler}
            type="number"
            value={angles.angleTwo}
            name="angleTwo"
            id="angleTwo"
          />
        </div>
        <div>
          <label htmlFor="angleThree">Angle 3</label>
          <input
            onChange={inputChangeHandler}
            type="number"
            name="angleThree"
            value={angles.angleThree}
            id="angleThree"
          />
        </div>
        <button type="submit">is Triangle?</button>
        <h3>{result}</h3>
      </form>

      <form onSubmit={onSecondSubmitHandler}>
        <div>
          <p>Angle 1: 45</p>
          <p>Angle 2: 55</p>
          <p></p>
          <label htmlFor="missingAngle">Missing Angle</label>
          <input
            onChange={missingAngleChangeHandler}
            type="number"
            value={missingAngle}
            name="missingAngle"
            id="missingAngle"
          />
        </div>
        <button type="submit">is Triangle?</button>
        <h3>{resultSecond}</h3>
      </form>
    </>
  );
}
