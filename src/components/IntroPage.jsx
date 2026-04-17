import { useState } from "react";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";

export default function IntroPage() {
  // passed api specifications (category, difficulty, and number of questions) to question component
  const [questionsApiData, setQuestionsApiData] = useState({
    diff: "easy",
    catId: "Sports",
    num: 10,
  });
  const difficulty = ["easy", "medium", "hard"];
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/questions/${questionsApiData.diff}/${questionsApiData.catId}/${questionsApiData.num}`,
    );
  };
  return (
    <>
      <div className="introDiv jcontent">
        <p>
          Simply cheif your short quiz with your fav Category, Difficulty and
          Number of Questions .{" "}
        </p>
        <form action="" onSubmit={handleSubmit} className="cat-section">
          <label htmlFor="category">
            Category :
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
          </label>
          <label htmlFor="difficulty">
            Select Difficulty :
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
          </label>
          <label htmlFor="numberOfQuestions">
            Number of Questions :
            <input
              id="numberOfQuestions"
              type="number"
              max={50}
              placeholder="(1 - 50) Default => 10"
              min={1}
              onChange={(e) => {
                setQuestionsApiData((prev) => ({
                  ...prev,
                  num: e.target.value,
                }));
              }}
            />
          </label>
        </form>
        <button className="btn" type="submit" onClick={handleSubmit}>
          Start Quiz
        </button>
      </div>
    </>
  );
}
