import { useState } from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";

export default function IntroPage() {
  // passed api specifications (category, difficulty, and number of questions) to question component
  const [questionsApiData, setQuestionsApiData] = useState({
    diff: "easy",
    catId: "Sports",
    num: 10,
  });
  const difficulty = ["easy", "medium", "hard"];
  return (
    <>
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
                  catId: e.target.value,
                }));
              }}
            >
              {<Categories />}
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
              {difficulty.map((item, index) => (
                <option key={index} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
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
        <Link
          to={`/questions/${questionsApiData.diff}/${questionsApiData.catId}/${questionsApiData.num}`}
        >
          <button>Start Quiz</button>
        </Link>
        <footer>
          Developed By{" "}
          <a href="https://github.com/M0hammedMahm0ud" target="_blank">
            Mohammed Mahmoud Ali{"  "}
            <i className="fa-brands fa-github"></i>
          </a>
        </footer>
      </div>
    </>
  );
}
