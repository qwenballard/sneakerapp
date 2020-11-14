import React, { Component, useState, useEffect } from "react";

//imported image
import logo from "../../assets/img/logo.png";

function Signup(props) {
  return (
    <div className="form-container">
      <img className="form-logo" src={logo} alt="The business logo" />
      <h2>Sign Up</h2>
      <form action="/signup" method="POST">
        <div className="field has-icons-left has-icons-right">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <div class="control">
            <input
              className="input login-input is-medium is-rounded"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
          </div>
        </div>
        <div className="field has-icons-left has-icons-right">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <div class="control">
            <input
              className="input login-input is-medium is-rounded"
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
            />
          </div>
        </div>
        <div className="field has-icons-left has-icons-right">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <div class="control">
            <input
              className="input login-input is-medium is-rounded"
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              required
            />
          </div>
        </div>
        <div className="field has-icons-left has-icons-right">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <div class="control">
            <input
              className="input login-input is-medium is-rounded"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="field has-icons-left has-icons-right">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <div class="control">
            <input
              className="input login-input is-medium is-rounded"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <div className="field has-icons-left has-icons-right">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <div class="control">
            <input
              className="input login-input is-medium is-rounded"
              type="text"
              id="favorite_shoe"
              name="favorite_shoe"
              placeholder="Favorite Shoe"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="gender" value="men" />
               Men
            </label>
            <label className="radio">
              <input type="radio" name="gender" value="women" />
               Women
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
          <button className="form-button signup-button" type="submit">
            Sign Up
          </button>
      </form>
    </div>
  );
}

export default Signup;
