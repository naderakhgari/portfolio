import React, { useState } from "react";
import "../grid.css";

const Contact = () => {
const [message , setMessage]=useState({
        name :"",
        email:"",
        text:"",
    })
    console.log(message)
    const onChange = (event)=>{
setMessage({
    ...message,
    [event.target.name]: event.target.value
})
    }
  return (
    <div className="container">
      <form className="form-style row">
        <formGroup className="formGroup col-12">
          <formGroup className="form-element col-12">
            <label>Name</label>
            <input
              placeholder="Your name"
              type="text"
              name="name"
              onChange={onChange}
              required
            ></input>
          </formGroup>
          <formGroup className="form-element">
            <label>Email</label>
            <input
              placeholder="Your Email"
              type="text"
              name="email"
              onChange={onChange}
              required
            ></input>
          </formGroup>
          <formGroup className="form-element">
            message:{" "}
            <input
              placeholder="The message"
              type="text-area"
              name="text"
              onChange={onChange}
              required
            ></input>
          </formGroup>
        </formGroup>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
