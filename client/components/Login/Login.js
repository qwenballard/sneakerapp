import React, { Component, useState, useEffect } from "react";

//imported image
import logo from "../../assets/img/logo.png";

function Login(props) {
  const [signup, showForm] = useState(true);

  const toggleForm = (string) => {
    const signup  = document.getElementsByClassName('signup-toggle')[0];
    const login = document.getElementsByClassName('login-toggle')[0];
    console.log(signup);
    if (string === 'signup') {
      showForm(true);
      signup.classList.add("selected");
      login.classList.remove("selected");
    } else {
      showForm(false);
      login.classList.add("selected");
      signup.classList.remove("selected");
    }
  };

  return (
    <div className="login-container">
      <img className="login-image" src={logo} alt="business-logo" />
      {/* <p className="credit">logo made by DesignEvo</p> */}
      <div className="form-border">
        <div className="form-toggle">
          <h1 className='signup-toggle selected' onClick={() => {toggleForm("signup")}}>
            Sign Up
          </h1>
          <h1 className='login-toggle' onClick={() => { toggleForm("login")}}>
            Log In
          </h1>
        </div>
        <div className="login-buttons">
          <button>G+</button>
          <button>f</button>
          <button>in</button>
        </div>
        {signup ? (
          <form action="/signup" method="POST">
            <div class="field">
              <label htmlFor="username" class="label">
                Username
              </label>
              <div class="control">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label htmlFor="email" class="label">
                Email
              </label>
              <div class="control">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label htmlFor="first_name" class="label">
                First Name
              </label>
              <div class="control">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Enter First Name"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label htmlFor="last_name" class="label">
                Last Name
              </label>
              <div class="control">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label htmlFor="password" class="label">
                Password
              </label>
              <div class="control">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label htmlFor="favorite_shoe" class="label">
                Favorite Shoe
              </label>
              <div class="control">
                <input
                  type="text"
                  id="favorite_shoe"
                  name="favorite_shoe"
                  placeholder="Enter Favorite Shoe"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="radio">
                  Men
                  <input type="radio" name="gender" value="men" />
                </label>
                <label className="radio">
                  Women
                  <input type="radio" name="gender" value="women" />
                </label>
              </div>
            </div>
            <div className="field">
              <div class="control">
                <label className="checkbox">
                  <input type="checkbox" />I agree to the with Private Policy
                </label>
              </div>
            </div>
            <button className="sign-up" type="submit">
              Sign Up
            </button>
          </form>
        ) : (
          <form action="/login" method="POST">
            <div class="field">
              <label htmlFor="email-login" class="label">
                Email
              </label>
              <div class="control">
                <input
                  type="email"
                  id="email-login"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label htmlFor="password-login" class="label">
                Password
              </label>
              <div class="control">
                <input
                  type="password"
                  id="password-login"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>
            <button className="sign-up" type="submit">
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
