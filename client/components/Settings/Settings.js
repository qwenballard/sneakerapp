import React, { Component, useState, useEffect } from 'react';

function Settings(props) {
    const { authorized, email, favorite_shoe, first_name, gender, last_name, username } = props;
    const [updatedUser, setUpdate] = useState({
      email: email,
      favorite_shoe: favorite_shoe,
      first_name: first_name,
      last_name: last_name,
      username: username,
      gender: gender,
    });

    console.log(props);

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setUpdate( prevUser => {
        return {
          ...prevUser,
          [name]: value
        }
      });
    };

    // useEffect(() => {
    //   setTimeout( , 300);
    // }, []);
    
    return (
      <div className="form-container">
        <div className="settings-form-border">
          <h2>Update Profile</h2>
          <form action="/update?_method=PUT" method="POST">
            <div className="field">
              <label htmlFor="username" className="label">
                Username
              </label>
              <div className="control">
                <input
                  className="input login-input is-medium is-rounded"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  onChange={handleChange}
                  value={updatedUser.username}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input
                  className="input login-input is-medium is-rounded"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  value={updatedUser.email}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="first_name" className="label">
                First Name
              </label>
              <div className="control">
                <input
                  className="input login-input is-medium is-rounded"
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Enter First Name"
                  onChange={handleChange}
                  value={updatedUser.first_name}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="last_name" className="label">
                Last Name
              </label>
              <div className="control">
                <input
                  className="input login-input is-medium is-rounded"
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  value={updatedUser.last_name}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="favorite_shoe" className="label">
                Favorite Shoe
              </label>
              <div className="control">
                <input
                  className="input login-input is-medium is-rounded"
                  type="text"
                  id="favorite_shoe"
                  name="favorite_shoe"
                  placeholder="Favorite Shoe"
                  onChange={handleChange}
                  value={updatedUser.favorite_shoe}
                  required
                />
              </div>
            </div>

            <label>Gender: </label>
            {gender === "men" ? (
              <div className="radio-buttons">
                <label htmlFor="gender">
                  Men
                  <input
                    type="radio"
                    name="gender"
                    id="men"
                    value="men"
                    checked="checked"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="gender">
                  Women
                  <input
                    type="radio"
                    name="gender"
                    id="women"
                    value="women"
                    onChange={handleChange}
                  />
                </label>
              </div>
            ) : (
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="men"
                      onChange={handleChange}
                    />
                    Men
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="women"
                      onChange={handleChange}
                    />
                    Women
                  </label>
                </div>
              </div>
            )}
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div></div>
      </div>
    );
}

export default Settings;