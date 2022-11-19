import "./Login.css";
import React, { useState } from "react";
const Login = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");

  const passwordChangeHandler = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onSaveData(formData);
    //  setEmail("");
    // setPassword("");
  };
  return (
    <div>
      <div
        className="modal fade"
        id="modalLoginForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text"></i>
                <input
                  type="email"
                  id="defaultForm-email"
                  onChange={emailChangeHandler}
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  for="defaultForm-email"
                >
                  Your email
                </label>
              </div>

              <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  id="defaultForm-pass"
                  onChange={passwordChangeHandler}
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  for="defaultForm-pass"
                >
                  Your password
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-default" onClick={submitHandler}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center">
          <a
            href=""
            className="btn btn-default btn-rounded mb-4"
            data-toggle="modal"
            data-target="#modalLoginForm"
          >
            Launch Modal Login Form
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
