import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../Components";
import { FormRow } from "../Components";

const Register = () => {
  return (
    <Wrapper>
      <form action="" className="form">
        <Logo />
        <FormRow type="text" name="name" defaultValue="Vatsal" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="Kayastha"
        />
        <FormRow type="text" name="location" defaultValue="Gujarat" />
        <FormRow
          type="email"
          name="email"
          defaultValue="vatsalkayastha710@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="Vatsal123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
