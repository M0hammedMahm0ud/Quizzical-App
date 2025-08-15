import { useState, useEffect } from "react";
import axios from "axios";
import IntroPage from "./IntroPage";
import { categories } from "../Data/categories";
export default function Questions(props) {
  const [triviaQuestion, setTriviaQuestion] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [disable, setDisable] = useState(false);
  const [newGame, setNewGame] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [allCorrectAnswers, setAllCorrectAnswers] = useState([]);
  const [matchAnswers, setMatchAnswers] = useState([]);
  const [userPoints, setUserPoints] = useState(0);
  console.log(props.apiDataInfo);
  async function getTriviaData() {
    setLoading(true);
    let catNum = 0;
    for (let i of categories) {
      if (i.category === props.apiDataInfo.cat) {
        catNum = i.apiId;
      }
    }
    const resp = await axios.get(
      `https://opentdb.com/api.php?amount=${props.apiDataInfo.num}&category=${catNum}&difficulty=${props.apiDataInfo.diff}&type=multiple`
    );

    const questions = resp.data.results.map((q) => {
      const answers = [...q.incorrect_answers, q.correct_answer].sort(
        () => Math.random() - 0.5
      );
      return { ...q, allAnswers: answers };
    });

    setTriviaQuestion(questions);
    setAllCorrectAnswers(
      questions.map((q) => ({
        question: q.question,
        correctAnswer: q.correct_answer,
      }))
    );
    setCategory(resp.data.results[0].category);
    setLoading(false);
  }

  useEffect(() => {
    getTriviaData();
  }, []);

  function removeCharacters(question) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = question;
    return textarea.value;
  }

  function addUserAnswers(ansObj) {
    setUserAnswers((prev) => {
      const filtered = prev.filter((item) => item.question !== ansObj.question);
      return [...filtered, ansObj];
    });
    if (userAnswers.length === props.apiDataInfo.num - 1) {
      setDisable(true);
    }
  }

  function handleAnswers() {
    let points = 0;
    const matches = [];

    allCorrectAnswers.forEach((correct) => {
      const userAnswer = userAnswers.find(
        (ua) => ua.question === correct.question
      );
      if (userAnswer) {
        const isCorrect = userAnswer.answer === correct.correctAnswer;
        if (isCorrect) points++;
        matches.push({
          question: correct.question,
          correctAnswer: correct.correctAnswer,
          userAns: userAnswer.answer,
          isUserCorrect: isCorrect,
        });
      }
    });

    setUserPoints(points);
    setMatchAnswers(matches);
    setCheck(true);
  }
  function getNewQuiz() {
    setNewGame(true);
  }
  return (
    <>
      {newGame ? (
        <IntroPage />
      ) : (
        <>
          {loading ? (
            <div className="load">
              <h3>Loading...</h3>
            </div>
          ) : (
            <div className="questionDiv">
              <h4>Questions Category: {category}</h4>
              {triviaQuestion.map((triviaData, index) => (
                <div key={index} className="quest-card">
                  <p>
                    {index + 1} {" - "}
                    {removeCharacters(triviaData.question)}
                  </p>
                  <div className="answers-span-parent">
                    {triviaData.allAnswers.map((choice, i) => {
                      let className = "answers-span";
                      const isSelected = userAnswers.some(
                        (userAns) =>
                          userAns.question === triviaData.question &&
                          userAns.answer === choice
                      );
                      if (check) {
                        const matchedEl = matchAnswers.find(
                          (matched) => matched.question === triviaData.question
                        );
                        if (matchedEl) {
                          if (choice === matchedEl.correctAnswer) {
                            className = "correct"; // Correct answer
                          } else if (
                            choice === matchedEl.userAns &&
                            !matchedEl.isUserCorrect
                          ) {
                            className = "wrong-answer"; // Wrong selection
                          } else {
                            className = "selected-answer without";
                          }
                        }
                      } else if (isSelected) {
                        className = "selected-answer";
                      }

                      return (
                        <span
                          key={i}
                          onClick={() =>
                            !check &&
                            addUserAnswers({
                              question: triviaData.question,
                              answer: choice,
                            })
                          }
                          className={className}
                        >
                          {removeCharacters(choice)}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
              {check ? (
                <div className="new-quiz">
                  <span>{`your score is ${userPoints} / ${userAnswers.length}`}</span>
                  <button onClick={getNewQuiz}>New Quiz</button>
                </div>
              ) : (
                <button
                  onClick={handleAnswers}
                  disabled={disable ? false : true}
                  className={disable ? "" : "disabled-btn"}
                >
                  Check answers
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
