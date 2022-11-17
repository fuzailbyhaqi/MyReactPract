import React, { useState } from "react";
const ContactForm = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredMessage, setMessage] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    props.onSaveForm(formData);
    setName("");
    setMessage("");
    setEmail("");

    console.log(formData);
  };
  return (
    <form
      id="contact-form"
      action=""
      method="post"
      class="tm-contact-form"
      onSubmit={submitHandler}
    >
      <div class="form-group">
        <input
          type="text"
          id="contact_name"
          name="contact_name"
          class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          placeholder="Your Name"
          required=""
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          id="contact_email"
          name="contact_email"
          class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          placeholder="Your Email"
          required=""
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </div>

      <div class="form-group">
        <textarea
          rows="4"
          id="contact_message"
          name="contact_message"
          class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
          placeholder="Message..."
          value={enteredMessage}
          required=""
          onChange={messageChangeHandler}
        ></textarea>
      </div>

      <div class="form-group mb-0">
        <button
          type="submit"
          class="btn rounded-0 d-block ml-auto tm-btn-primary"
        >
          Send It Now
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
