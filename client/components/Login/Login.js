import React, { Component } from 'react';

function Login(props) {
    return (
      <div>
        <div className="signup-form">
          <form action="/signup" method="POST">
            <h1>Create Account</h1>
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
                  placeholder="Enter Email"
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
            <div class="field">
              <div class="control">
                <label htmlFor="men" class="radio">
                  <input type="radio" name="gender" id="men" value="men" />
                  Men
                </label>
                <label htmlFor="women" class="radio">
                  <input type="radio" name="gender" id="women" value="women" />
                  Women
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div class className="login-form">
          <form action="/login" method="POST">
            <h1>Log In</h1>
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
            <button type="submit">Submit</button>
          </form>
        </div>

        <div class="modal">
          <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close"></button>
              </header>
              <section class="modal-card-body">
                {/* <!-- Content ... --> */}
              </section>
              <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
              </footer>
            </div>
        </div>
      </div>
    );
}

export default Login;

