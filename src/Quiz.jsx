import { useState } from "react";
import { QuizData } from "./QuizData";
import Question from "./Question";

const Quiz = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formbold-form-title">
        <h2 style={{ marginBottom: "1.5rem" }}>Online Quiz</h2>
      </div>

      {QuizData.questions.map((question, index) => (
        <Question
          key={index}
          label={question.label}
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
