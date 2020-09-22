import React, { Component } from 'react';

function Login(props) {
    return (
      <div>
        Create Account
        <form action="/signup" method="POST">
          <input type="text" name="username" placeholder="Enter Username" required />
          <input type="email" name="email" placeholder="Enter Email" required />
          <input type="text" name="first_name" placeholder="Enter First Name" required />
          <input type="text" name="last_name" placeholder="Enter Last Name" required />
          <input type="password" name="password" placeholder="Enter Password" required />
          <input type="text" name="favorite_shoe" placeholder="Enter Favorite Shoe" />
          <label>Gender: </label>
          <label for="gender">
            Men
            <input type="radio" name="gender" id="men" value="men" />
          </label>
          <label for="gender">
            Women
            <input type="radio" name="gender" id="women" value="women" />
          </label>
          <button type="submit">Submit</button>
        </form>

        <form action="/login" method="POST">
          <input type="email" name="email" placeholder="Enter Email" required />
          <input type="password" name="password" placeholder="Enter Password" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Login;