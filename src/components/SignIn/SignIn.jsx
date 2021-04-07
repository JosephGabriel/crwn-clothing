import React, { Component } from "react";

import "./SignIn.scss";

import FormInput from "../FormInput/FormInput";
import CustomButtom from "../CustomButtom/CustomButtom";

import { auth, signInWithGoogle } from "../../firebase/firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign with your email and password</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButtom>Sign in</CustomButtom>
            <CustomButtom isGoogle onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
