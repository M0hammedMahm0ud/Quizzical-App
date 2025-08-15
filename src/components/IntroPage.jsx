import { useState } from "react";
import Questions from "./Questions";

export default function IntroPage() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <>
      {startQuiz ? (
        <Questions />
      ) : (
        <div className="introDiv jcontent">
          <h1>Quizzical</h1>
          <p>
            Simply cheif your short quiz with your fav Category, Difficulty and
            Number of Questions .{" "}
          </p>
          <div className="cat-section">
            <div>
              <label htmlFor="category">Category : </label>
              <select id="category">
                <option>Sports</option>
                <option>Comics</option>
                <option>Film</option>
                <option>Art</option>
                <option>General</option>
                <option>Books</option>
                <option>Computers</option>
                <option>History</option>
                <option>Anime & Manga</option>
                <option>Cartoon & Animations</option>
                <option>Geography</option>
              </select>
            </div>{" "}
            <div>
              <label htmlFor="difficulty">Select Difficulty : </label>
              <select id="difficulty">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <div>
              <label htmlFor="numberOfQuestions">Number of Questions : </label>
              <input
                id="numberOfQuestions"
                type="number"
                max={50}
                placeholder="(1 - 50)"
                min={1}
              />
            </div>
          </div>
          <button onClick={() => setStartQuiz(() => true)}>Start Quiz</button>
        </div>
      )}
    </>
  );
}
