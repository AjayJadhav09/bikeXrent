import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackButton = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [userFullName, setUserFullName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserFullName(user.userFullName || "");
      setEmail(user.emailId || "");
      setIsCustomer(user.role === "CUSTOMER");
    }
  }, []);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleSubmit = () => {
    if (feedback.trim() === "") {
      alert("Feedback cannot be empty");
      return;
    }

    console.log({ userFullName, email, feedback });

    setFeedback("");
    setFormVisible(false);
    alert("Thank you for your feedback!");
  };

  if (!isCustomer) {
    return null;
  }

  return (
    <div className="position-fixed bottom-0 end-0 p-3 z-3">
      {isFormVisible && (
        <div className="card shadow p-3 mb-3 bg-white rounded" style={{ width: "250px" }}>
          <h5 className="card-title mb-3">Give Your Feedback</h5>
          <input
            type="text"
            value={userFullName}
            readOnly
            className="form-control mb-2"
          />
          <input
            type="email"
            value={email}
            readOnly
            className="form-control mb-2"
          />
          <textarea
            placeholder="Enter your feedback"
            rows="4"
            className="form-control mb-3"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      <button
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "50px", height: "50px" }}
        onClick={toggleForm}
        aria-label="Toggle Feedback Form"
      >
        {isFormVisible ? "×" : "💬"}
      </button>
    </div>
  );
};

export default FeedbackButton;
