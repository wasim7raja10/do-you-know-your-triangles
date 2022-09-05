import { useState } from "react";

export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });
  const [score, setScore] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    let score = 0;
    if (selectedAnswer.question1 === "90") score++;
    if (selectedAnswer.question2 === "right angled") score++;
    if (selectedAnswer.question3 === "one right angle") score++;
    if (selectedAnswer.question4 === "Equilateral triangle") score++;
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

        <div className="question3">
          <p>A triangle can have</p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="one right angle"
                name="question3"
                onChange={onValueChange}
              />
              one right angle
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="two right angle"
                name="question3"
                onChange={onValueChange}
              />
              two right angle
            </label>
          </div>
        </div>

        <div className="question4">
          <p>Which of the following triangles are always similar?</p>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Equilateral triangle"
                name="question4"
                onChange={onValueChange}
              />
              Equilateral triangle
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Isosceles triangle"
                name="question4"
                onChange={onValueChange}
              />
              Isosceles triangle
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>{score}</h3>
    </>
  );
}
