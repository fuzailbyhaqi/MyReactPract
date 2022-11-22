import "./Login.css";
import React, { useState } from "react";
const Login = (props) => {

  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPwd, setErrorPwd] = useState('');

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    validateData();
    console.log(enteredPassword)
  
        const formData = {
          email: enteredEmail,
          password: enteredPassword,
        };
        console.log(formData);
        props.onSaveData(formData);
      
    //  setEmail("");
    // setPassword("");
  };

  const validateData = () => {
    if (enteredEmail === '') setErrorEmail("Email is required");
    else setErrorEmail('');

    if (enteredPassword === '') setErrorPwd("Password is required");
    else setErrorPwd('');
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
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                  style={{marginLeft: "10px"}}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="defaultForm-email"
                  onChange={emailChangeHandler}
                  className="form-control validate"
                />
                <span className="text-danger">{errorEmail}</span>
              </div>

              <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text"></i>
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                  style={{marginLeft: "10px"}}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="defaultForm-pass"
                  onChange={passwordChangeHandler}
                  className="form-control validate"
                />
                <span className="text-danger">{errorPwd}</span>
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
