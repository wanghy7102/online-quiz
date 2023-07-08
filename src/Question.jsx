import { useState } from "react";

const Question = (props) => {
  const label = props.label;
  const options = props.options;
  const answer = props.answer;
  const isSubmitted = props.isSubmitted;

  const [response, setResponse] = useState(null);

  const getStyle = (index) => {
    if (isSubmitted) {
      if (index === answer) return { backgroundColor: "lightgreen" };
      if (index.toString() === response)
        return { backgroundColor: "lightpink" };
    }
    return {};
  };

  return (
    <div className="formbold-mb-5">
      <label htmlFor="qusOne" className="formbold-form-label">
        {label}
      </label>
      <div className="formbold-radio-flex">
        {options.map((label, index) => (
          <div
            key={index}
            className="formbold-radio-group"
            style={getStyle(index)}
          >
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                value={index}
                checked={index.toString() === response}
                onChange={(e) => {
                  if (!isSubmitted) setResponse(e.target.value);
                }}
              />
              {label}
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
