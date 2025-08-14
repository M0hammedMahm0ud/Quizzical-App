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
          <p>Just Answer to this 7 Questions (Sports Categoty !!)</p>
          <button onClick={() => setStartQuiz(() => true)}>Start Quiz</button>
        </div>
      )}
    </>
  );
}
