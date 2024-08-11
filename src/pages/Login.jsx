import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../Components";

const Login = () => {
  return (
    <Wrapper>
      <from className="form">
        <Logo />
        <FormRow
          type="email"
          name="name"
          defaultValue="vatsalkayastha710@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="Vatsal123" />
        <button className="btn btn-block" type="submit">
          Submit
        </button>
        <button className="btn btn-block" type="button">
          Explore The App
        </button>
        <p>
          Not a Member Yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </from>
    </Wrapper>
  );
};

export default Login;
