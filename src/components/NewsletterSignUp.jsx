import React, { useCallback, useState } from "react";
import NewsLetterImage from "../Assets/Landing.png";

function NewsletterSignUp() {
  function rr(e) {
    let error = true;
    if (email.includes("@") && email.includes(".") && name.length > 1) {
      error = false;
    }

    // console.log(error);
    if (error === true) {
      e.preventDefault();
      alert("Invalid Input jnl");
    }
  }
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  // console.log(name + " " + email);

  return (
    <div className="Newsletter-Landing section ">
      <div className="NewLetter-form">
        <form onSubmit={rr} className="NewLetter-form-form">
          <div>
            <label className="form-label">Enter your Email:</label>
            <input
              value={email}
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
              className="form-input"
              placeholder="Email..."
            />
          </div>
          <div>
            <label className="form-label">Enter your Name:</label>
            <input
              value={name}
              onChange={(e) => {
                SetName(e.target.value);
              }}
              className="form-input"
              placeholder="Name..."
            />
          </div>
          <button className="primary-button form-button " type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="Newsletter-Image hidden">
        <img src={NewsLetterImage} alt=""></img>
      </div>
    </div>
  );
}

export default NewsletterSignUp;
