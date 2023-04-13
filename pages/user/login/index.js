import Layout from "../../../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Style from "/styles/login.module.css";
import StyleG from "/styles/general.module.css";
import React, { useState } from "react";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <Layout>
        <div className={Style.AuthFormContainer}>
          <form className={Style.AuthForm}>
            <div className={Style.AuthFormContent}>
              <h3 className={`${Style.AuthFormTitle} ${StyleG.fontTitle}`}>
                Sign In
              </h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={Style.AuthFormContainer}>
        <form className={Style.AuthForm}>
          <div className={Style.AuthFormContent}>
            <h3 className={`${Style.AuthFormTitle} ${StyleG.fontTitle}`}>
              Sign Up
            </h3>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="full name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="address...@gmail.com"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
