import { useState } from "react";
import Questions from "./Questions";
import { categories } from "../Data/categories";
import { difficulty } from "../Data/categories";

export default function IntroPage() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questionsApiData, setQuestionsApiData] = useState({
    diff: "easy",
    cat: "Sports",
    num: 10,
  });
  function Categories() {
    return categories.map((item, index) => (
      <option key={index} value={item.category}>
        {item.category}
      </option>
    ));
  }
  function difficulty_() {
    return difficulty.map((item, index) => (
      <option key={index} value={item}>
        {item.toUpperCase()}
      </option>
    ));
  }
  return (
    <>
      {startQuiz ? (
        <Questions apiDataInfo={questionsApiData} />
      ) : (
        <div className="introDiv jcontent">
          <h1>Quizzical</h1>
          <p>
            Simply cheif your short quiz with your fav Category, Difficulty and
            Number of Questions .{" "}
          </p>
          <div className="cat-section">
            <div className="individual-cat-div">
              <label htmlFor="category">Category : </label>
              <select
                id="category"
                onChange={(e) => {
                  setQuestionsApiData((prev) => ({
                    ...prev,
                    cat: e.target.value,
                  }));
                }}
              >
                {Categories()}
              </select>
            </div>{" "}
            <div className="individual-cat-div">
              <label htmlFor="difficulty">Select Difficulty : </label>
              <select
                id="difficulty"
                onChange={(e) => {
                  setQuestionsApiData((prev) => ({
                    ...prev,
                    diff: e.target.value,
                  }));
                }}
              >
                {difficulty_()}
              </select>
            </div>
            <div className="individual-cat-div">
              <label htmlFor="numberOfQuestions">Number of Questions : </label>
              <input
                id="numberOfQuestions"
                type="number"
                max={50}
                placeholder="(1 - 50) defult => 10"
                min={1}
                onChange={(e) => {
                  setQuestionsApiData((prev) => ({
                    ...prev,
                    num: e.target.value,
                  }));
                }}
              />
            </div>
          </div>

          <button onClick={() => setStartQuiz(() => true)}>Start Quiz</button>
        </div>
      )}
    </>
  );
}
