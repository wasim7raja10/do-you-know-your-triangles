import { useState } from "react";

export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState({
    question1: "",
    question2: "",
  });
  const [score, setScore] = useState(0);
  function submitHandler(e) {
    e.preventDefault();
    let score = 0;
    if (selectedAnswer.question1 === "90") score++;
    if (selectedAnswer.question2 === "right angled") score++;
    setScore(score);
  }
  function onValueChange(e) {
    setSelectedAnswer({
      ...selectedAnswer,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <form className="quiz" onSubmit={submitHandler}>
        <div className="question1">
          <p>
            What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="45"
                name="question1"
                onChange={onValueChange}
              />
              45°
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="90"
                name="question1"
                onChange={onValueChange}
              />
              90°
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="60"
                name="question1"
                onChange={onValueChange}
              />
              60°
            </label>
          </div>
        </div>

        <div className="question2">
          <p>If a triangle has an angle of 90°, what is it called?</p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="obtuse"
                name="question2"
                onChange={onValueChange}
              />
              Obtuse
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="acute"
                name="question2"
                onChange={onValueChange}
              />
              Acute
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="right angled"
                name="question2"
                onChange={onValueChange}
              />
              Right Angled
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>{score}</h3>
    </>
  );
}
