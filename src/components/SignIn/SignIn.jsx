import React, { useState } from "react";
import { connect } from "react-redux";

import "./SignIn.scss";

import FormInput from "../FormInput/FormInput";
import CustomButtom from "../CustomButtom/CustomButtom";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { email, password } = credentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <p>Sign with your email and password</p>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="buttons">
          <CustomButtom type="submit">Sign in</CustomButtom>
          <CustomButtom type="button" isGoogle onClick={googleSignInStart}>
            Sign in with Google
          </CustomButtom>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
