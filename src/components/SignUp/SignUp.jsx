import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButtom/CustomButtom";

import { signUpStart } from "../../redux/user/userActions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            required
          />

          <CustomButton>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
