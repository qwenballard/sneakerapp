import React, { Component, useState, useEffect } from "react";

//imported image
import logo from "../../assets/img/logo.png";

function Login(props) {
  return (
    <div className="form-container">
      <img className="form-logo" src={logo} alt="The business logo" />
      <h2>Log In</h2>
      <form action="/login" method="POST">
        <div className="field has-icons-left has-icons-right">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <div className="control">
            <input
              className="input login-input is-medium is-rounded"
              type="email"
              id="email-login"
              name="email"
              placeholder="example@email.com"
              required
            />
          </div>
        </div>
        <div className="field has-icons-left has-icons-right">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <div className="control">
            <input
              className="input login-input is-medium is-rounded"
              type="password"
              id="password-login"
              name="password"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="form-area">
          <p>
            {/* This redirect doesn't work yet. Needs to be updated */}
            Don't have an account?{" "}
            <a className="form-redirect" href="/signup">
              Signup
            </a>
          </p>
          <button className='form-button' type="submit">
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
