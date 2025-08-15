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
          <p>Simply cheif your short quiz with your fav Category</p>
          <div className="cat-section">
            <div>
              <label for="category">Category : </label>
              <select name="category">
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
              <label for="difficulty">Select Difficulty : </label>
              <select name="difficulty">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>
          <button onClick={() => setStartQuiz(() => true)}>Start Quiz</button>
        </div>
      )}
    </>
  );
}
