import { useState } from "react";

const Question = (props) => {
  const label = props.label;
  const options = props.options;
  const answer = props.answer;
  const isSubmitted = props.isSubmitted;

  const [response, setResponse] = useState(null);

  const getStyle = (value) => {
    if (isSubmitted) {
      if (value === answer) return { backgroundColor: "lightgreen" };
      if (value === response) return { backgroundColor: "lightpink" };
    }
    return {};
  };

  return (
    <div className="formbold-mb-5">
      <label htmlFor="qusOne" className="formbold-form-label">
        {label}
      </label>
      <div className="formbold-radio-flex">
        {options.map((option, index) => (
          <div
            key={index}
            className="formbold-radio-group"
            style={getStyle(option.value)}
          >
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                value={option.value}
                checked={option.value === response}
                onChange={(e) => {
                  if (!isSubmitted) setResponse(e.target.value);
                }}
              />
              {String.fromCharCode("a".charCodeAt(0) + index)}. {option.label}
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
