import React, { useState } from "react";
import "../grid.css";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    text: "",
  });
  const onChange = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="container contact-container">
      <h2>Contact</h2>
      <h4>LET'S KEEP IN TOUCH</h4>
      <form className="form-style">
        <label>Name:</label>
        <input
          className="input"
          placeholder="Your name"
          type="text"
          name="name"
          onChange={onChange}
          required
        ></input>
        <label>Email:</label>
        <input
          className="input"
          placeholder="Your Email"
          type="text"
          name="email"
          onChange={onChange}
          required
        ></input>
        message:{" "}
        <textarea
          className="input"
          placeholder="The message"
          type="text-area"
          name="text"
          onChange={onChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn col-6 sm-col-4 md-col-3 lg-col-3 xl-col-2">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
