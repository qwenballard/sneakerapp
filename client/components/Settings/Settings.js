import React, { Component } from 'react';

function Settings(props) {
    const { authorized, email, favorite_shoe, first_name, gender, last_name, username } = props;
    console.log(props);
    return (
      <div>
        <p>Update Profile</p>
        <form action="/signup" method="PUT">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            required
          />
          <input type="email" name="email" placeholder="Enter Email" value={email} required />
          <input
            type="text"
            name="first_name"
            placeholder="Enter First Name"
            value={first_name}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Enter Last Name"
            value={last_name}
            required
          />
          <input
            type="text"
            name="favorite_shoe"
            placeholder="Enter Favorite Shoe"
            value={favorite_shoe}
          />
          <label>Gender: </label>
          {gender === "men" ? (
            <div>
              <label for="gender">
                Men
                <input type="radio" name="gender" id="men" value="men" checked="checked" />
              </label>
              <label for="gender">
                Women
                <input type="radio" name="gender" id="women" value="women" />
              </label>
            </div>
          ) : (
            <div>
              <label for="gender">
                Men
                <input type="radio" name="gender" id="men" value="men" />
              </label>
              <label for="gender">
                Women
                <input type="radio" name="gender" id="women" value="women" checked="checked" />
              </label>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default Settings;