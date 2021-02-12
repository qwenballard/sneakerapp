import React, { Component, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import Sneaker from './Sneaker/Sneaker';
import './Home.scss';

import Loader from "react-loader-spinner";

function Home(props){
  const [sneakers, setSneakers] = useState([]);
  const [search, setSearch] = useState('');
  const [searchError, setSearchError] = useState('');
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = () => {
    if(search === '') {
      console.log('nothing submitted');
      setSearchError('Please Enter a Sneaker Name');
      return;
    }
    setLoadingSpinner(true);
    fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=10&name=${search}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      setSneakers(data.results);
      setLoadingSpinner(false);
      setSearchError('');
    })
    .catch(err => console.log(err));
  }

  const addSneaker  = (id) => {
    let created = { sneakerId: id }
    fetch(`http://localhost:8080/addsneaker`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(created)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data === 'Please login first'){
          return history.push('/login');
        }
      })
      .catch((err) => console.log(err));
  }

  //Initial Render to display recent shoes
  useEffect(() => {
    setLoadingSpinner(true);
    fetch('https://api.thesneakerdatabase.com/v1/sneakers?limit=10&releaseYear=2020')
    .then(res => res.json())
    .then((data) => {
      setSneakers(data.results);
      setLoadingSpinner(false);
    })
    .catch(err => console.log(err));
  }, []);

  //Updates list of sneakers based on search result
  useEffect(() => {
    setSearch("");
  }, [sneakers]);
  
    const showSneakers = sneakers.map((sneaker) => {
      return <Sneaker key={uuidv4()} data={sneaker} addSneaker={addSneaker} />
    })

    return (
      <div className="container">
        <div className="homeBackgroundImage">
          <span className="homeHeaderPrimary">Search {"&"} Save</span>
          <br></br>
          <span className="homeHeaderSecondary">
            Your Personal Sneaker Wishlist
          </span>
        </div>

        {!loadingSpinner ? (
          <div className="searchBoxContainer">
            <span>
              <i className="fas fa-search"></i>
            </span>
            <input
              className="searchBox"
              type="text"
              name="searchSneaker"
              placeholder="Sneakers..."
              onChange={handleChange}
              value={search}
            ></input>
            <button
              className="searchButton"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
            {searchError ? (
              <span>
                <p className="searchError">{searchError}</p>
              </span>
            ) : (
              ""
            )}
          </div>
        ) : (
            <Loader
              className="searchBoxLoader"
              type="Puff"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={3000} //3 secs
            />
        )}

        <div className="sneakersContainer">
          {showSneakers.length !== 0 ? (
            showSneakers
          ) : (
            <p className="sneakersContainer">
              No Sneakers found. Please try again.
            </p>
          )}
        </div>
      </div>
    );
}

export default Home;