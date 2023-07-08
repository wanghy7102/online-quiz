import { useState } from "react";

const Quiz = () => {
  return (
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="formbold-mb-5">
        <label htmlFor="qusOne" className="formbold-form-label">
          All HTML code must be put which symbols?
        </label>

        <div className="formbold-radio-flex">
          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusOne"
                id="qusOne"
              />
              Option one
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusOne"
                id="qusOne"
              />
              Option Two
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusOne"
                id="qusOne"
              />
              Option Three
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusOne"
                id="qusOne"
              />
              None of them
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="formbold-mb-5">
        <label htmlFor="qusTwo" className="formbold-form-label">
          To display any image on web which tag we have to use?
        </label>

        <div className="formbold-radio-flex">
          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusTwo"
                id="qusTwo"
              />
              Option one
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusTwo"
                id="qusTwo"
              />
              Option Two
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusTwo"
                id="qusTwo"
              />
              Option Three
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusTwo"
                id="qusTwo"
              />
              None of them
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="qusThree" className="formbold-form-label">
          What is the full definition of HTML?
        </label>

        <div className="formbold-radio-flex">
          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusThree"
                id="qusThree"
              />
              Option one
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusThree"
                id="qusThree"
              />
              Option Two
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusThree"
                id="qusThree"
              />
              Option Three
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>

          <div className="formbold-radio-group">
            <label className="formbold-radio-label">
              <input
                className="formbold-input-radio"
                type="radio"
                name="qusThree"
                id="qusThree"
              />
              None of them
              <span className="formbold-radio-checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <button className="formbold-btn">Check Answer</button>
    </form>
  );
};

export default Quiz;
