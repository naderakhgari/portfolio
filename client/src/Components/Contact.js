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
    <div className="row">
      <form className="form-style col-12">
        <formGroup className="formGroup col-12">
          <formGroup className="form-element col-10">
            <label>Name</label>
            <input
              placeholder="Your name"
              type="text"
              name="name"
              onChange={onChange}
            ></input>
          </formGroup>
          <formGroup className="form-element">
            <label>Email</label>
            <input
              placeholder="Your Email"
              type="text"
              name="email"
              onChange={onChange}
            ></input>
          </formGroup>
          <formGroup className="form-element">
            message:{" "}
            <input
              placeholder="The message"
              type="text-area"
              name="text"
              onChange={onChange}
            ></input>
          </formGroup>
        </formGroup>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
