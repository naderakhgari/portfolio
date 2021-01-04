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
        <label>Name</label>
        <input
          placeholder="Your name"
          type="text"
          name="name"
          onChange={onChange}
          required
        ></input>
        <label>Email</label>
        <input
          placeholder="Your Email"
          type="text"
          name="email"
          onChange={onChange}
          required
        ></input>
        message:{" "}
        <textarea
          placeholder="The message"
          type="text-area"
          name="text"
          onChange={onChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
