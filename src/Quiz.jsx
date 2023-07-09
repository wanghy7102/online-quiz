import { useEffect, useState } from "react";
import { QuizData } from "./QuizData";
import Question from "./Question";

const shuffle = (arr) => {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    let j = Math.floor(Math.random() * result.length);
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
};

const Quiz = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let loadedQuestions = QuizData.questions;
    loadedQuestions = loadedQuestions.map((question) => {
      question.options = shuffle(question.options);
      return question;
    });
    loadedQuestions = shuffle(loadedQuestions);
    setQuestions(loadedQuestions);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formbold-form-title">
        <h2 style={{ marginBottom: "1.5rem" }}>Online Quiz</h2>
      </div>

      {questions.map((question, index) => (
        <Question
          key={index}
          label={`${index + 1}. ${question.label}`}
          options={question.options}
          answer={question.answer}
          isSubmitted={isSubmitted}
        />
      ))}

      <button className="formbold-btn">Check Answer</button>
    </form>
  );
};

export default Quiz;
