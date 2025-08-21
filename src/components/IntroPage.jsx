import { useState } from "react";
import Questions from "./Questions";
import Categories from "./Categories";

export default function IntroPage() {
  // boolean state to start quiz and render question component
  const [startQuiz, setStartQuiz] = useState(false);
  // passed api specifications (category, difficulty, and number of questions) to question component
  const [questionsApiData, setQuestionsApiData] = useState({
    diff: "easy",
    catId: "Sports",
    num: 10,
  });
  const categories = [
    {
      category: "Sports",
      apiId: 21,
    },
    {
      category: "Comics",
      apiId: 29,
    },
    {
      category: "Film",
      apiId: 11,
    },
    {
      category: "Art",
      apiId: 25,
    },
    {
      category: "General",
      apiId: 9,
    },
    {
      category: "Books",
      apiId: 10,
    },
    {
      category: "Computers",
      apiId: 18,
    },
    {
      category: "History",
      apiId: 23,
    },
    {
      category: "Anime & Manga",
      apiId: 31,
    },
    {
      category: "Cartoon & Animations",
      apiId: 32,
    },
    {
      category: "Geography",
      apiId: 22,
    },
  ];
  const difficulty = ["easy", "medium", "hard"];
  return (
    <>
      {startQuiz ? (
        <Questions apiDataInfo={questionsApiData} categories={categories} />
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
                {<Categories categories={categories} />}
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

          <button onClick={() => setStartQuiz(() => true)}>Start Quiz</button>
          <footer>
            Developed By{" "}
            <a href="https://github.com/M0hammedMahm0ud" target="_blank">
              Mohammed Mahmoud Ali{"  "}
              <i class="fa-brands fa-github"></i>
            </a>
          </footer>
        </div>
      )}
    </>
  );
}
