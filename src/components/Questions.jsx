import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { categories } from "../Contexts/categoryContext";
import { Link, useParams } from "react-router-dom";
export default function Questions() {
  //states
  const [triviaQuestion, setTriviaQuestion] = useState([]);
  const [matchAnswers, setMatchAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [allCorrectAnswers, setAllCorrectAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [disable, setDisable] = useState(false);
  const [userPoints, setUserPoints] = useState(0);

  const params = useParams();
  console.log(params);
  // categories context
  const Cats = useContext(categories);
  // const x = useParams();
  // console.log(x);
  async function getTriviaData() {
    setLoading(true);
    // match category to its api id
    let catNum = 0;
    for (let i of Cats) {
      if (i.category === params.cat) {
        catNum = i.apiId;
      }
    }
    // axios api call
    const resp = await axios.get(
      `https://opentdb.com/api.php?amount=${params.num}&category=${catNum}&difficulty=${params.diff}&type=multiple`
    );
    // prepare questions object with random array of all answers
    const questions = resp.data.results.map((q) => {
      const answers = [...q.incorrect_answers, q.correct_answer].sort(
        () => Math.random() - 0.5
      );
      return { ...q, allAnswers: answers };
    });

    // set returned questions object
    setTriviaQuestion(questions);
    // needed array of objects to determine the question and correct answer to this question
    setAllCorrectAnswers(
      questions.map((q) => ({
        question: q.question,
        correctAnswer: q.correct_answer,
      }))
    );
    // return loading state to false
    setLoading(false);
  }

  useEffect(() => {
    getTriviaData();
  }, []);

  // html entities decoding
  function htmlDecoding(question) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = question;
    return textarea.value;
  }

  // here we need to store user answer for check which is correct or incorrect
  function addUserAnswers(ansObj) {
    setUserAnswers((prev) => {
      const filtered = prev.filter((item) => item.question !== ansObj.question);
      return [...filtered, ansObj];
    });
    if (userAnswers.length === params.num - 1) {
      setDisable(true);
    }
  }

  // here is the most funny and logical part (at least for me)
  /* 
    this function handle the user points and which answer is correct or not
    also returned GREAT matchAnswer array of objects which i used to add correct class or wrong matched with the question, user answer, correct answer
  */

  function handleAnswers() {
    let points = 0;
    const matches = [];

    allCorrectAnswers.forEach((correct) => {
      const userAnswer = userAnswers.find(
        (userA) => userA.question === correct.question
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

  return (
    <>
      {loading ? (
        <div className="load">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="questionDiv">
          <div className="returnDiv">
            <Link to={"/"}>
              <i className="fa-solid fa-circle-left"></i> {"   "}
            </Link>
            <h4>
              {params.cat}, {params.diff.toUpperCase()}, {params.num} Questions
            </h4>
          </div>
          {triviaQuestion.map((triviaData, index) => (
            <div key={index} className="quest-card">
              <p>
                {index + 1} {" - "}
                {htmlDecoding(triviaData.question)}
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
                      {htmlDecoding(choice)}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
          {check ? (
            <div className="new-quiz">
              <span>{`your score is ${userPoints} / ${params.num}`}</span>
              <Link to="/">
                {" "}
                <button className="btn">New Quiz</button>
              </Link>
            </div>
          ) : (
            <button
              onClick={handleAnswers}
              disabled={disable ? false : true}
              className={disable ? "btn" : "disabled-btn"}
            >
              Check answers
            </button>
          )}
        </div>
      )}
    </>
  );
}
