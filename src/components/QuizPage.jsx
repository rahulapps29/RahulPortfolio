import React, { useReducer, useEffect, useState } from "react";
import quizData from "../data/quizData.json";
import "./QuizPage.css";

const initialState = {
  currentQuestion: 0,
  answers: [],
  timer: 30,
  completed: false,
  submitted: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "LOAD_STATE":
      return { ...state, ...action.payload };
    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: [...state.answers, action.payload],
        currentQuestion: state.currentQuestion + 1,
        timer: 30,
        completed: state.currentQuestion + 1 === quizData.length,
      };
    case "TICK":
      return { ...state, timer: state.timer - 1 };
    case "TIME_UP":
      return {
        ...state,
        answers: [...state.answers, null],
        currentQuestion: state.currentQuestion + 1,
        timer: 30,
        completed: state.currentQuestion + 1 === quizData.length,
      };
    case "SUBMIT":
      localStorage.removeItem("chemistryQuizState");
      return { ...state, submitted: true };
    case "RESTART":
      localStorage.removeItem("chemistryQuizState");
      return initialState;
    default:
      return state;
  }
}

const ChemistryQuiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [quizStarted, setQuizStarted] = useState(false);

  const { currentQuestion, answers, timer, completed, submitted } = state;

  useEffect(() => {
    const saved = localStorage.getItem("chemistryQuizState");
    if (saved) {
      dispatch({ type: "LOAD_STATE", payload: JSON.parse(saved) });
      setQuizStarted(true);
    }
  }, []);

  useEffect(() => {
    if (quizStarted && !submitted) {
      localStorage.setItem("chemistryQuizState", JSON.stringify(state));
    }
  }, [state, submitted, quizStarted]);

  useEffect(() => {
    if (!quizStarted || completed || submitted) return;
    if (timer === 0) {
      dispatch({ type: "TIME_UP" });
      return;
    }
    const interval = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(interval);
  }, [timer, completed, submitted, quizStarted]);

  const handleSubmit = () => dispatch({ type: "SUBMIT" });
  const handleRestart = () => {
    dispatch({ type: "RESTART" });
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <h2>Chemistry Quiz Instructions</h2>
        <ul className="instructions">
          <li>Each question has four options.</li>
          <li>You have 30 seconds per question.</li>
          <li>Once you answer, you cannot go back.</li>
          <li>Your score will be shown at the end with percentage.</li>
        </ul>
        <button className="submit-button" onClick={() => setQuizStarted(true)}>
          Start Quiz
        </button>
      </div>
    );
  }

  if (submitted) {
    const correctCount = answers.filter(
      (ans, i) => ans === quizData[i].answer
    ).length;
    const percentage = Math.round((correctCount / quizData.length) * 100);

    return (
      <div className="quiz-container">
        <h2>Quiz Results</h2>
        <p>
          <strong>Score:</strong> {correctCount} / {quizData.length}
        </p>
        <p>
          <strong>Percentage:</strong> {percentage}%
        </p>
        {quizData.map((q, i) => (
          <div
            key={i}
            className={`result-item ${
              answers[i] === q.answer ? "correct" : "incorrect"
            }`}
          >
            <p>
              <strong>Q{i + 1}:</strong> {q.question}
            </p>
            <p>Your Answer: {answers[i] || "Skipped"}</p>
            <p>Correct Answer: {q.answer}</p>
          </div>
        ))}
        <button className="submit-button" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed</h2>
        <button className="submit-button" onClick={handleSubmit}>
          Submit & View Results
        </button>
      </div>
    );
  }

  const current = quizData[currentQuestion];

  return (
    <div className="quiz-container">
      <h2>
        Question {currentQuestion + 1} / {quizData.length}
      </h2>
      <p className="question">{current.question}</p>
      <div className="options">
        {current.options.map((opt, idx) => (
          <button
            key={idx}
            className="option-button"
            onClick={() => dispatch({ type: "ANSWER_QUESTION", payload: opt })}
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="timer">Time Left: {timer}s</p>
    </div>
  );
};

export default ChemistryQuiz;
