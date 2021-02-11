import React, { Component, useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Sneaker from './Sneaker/Sneaker';
import './Home.scss';

//imported image
import heroImage from '../../assets/img/hero.jpeg';


function Home(props){
  const [sneakers, setSneakers] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = () => {
    fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=10&name=${search}`)
    .then(res => res.json())
    .then(data => setSneakers(data.results))
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
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  //Initial Render to display recent shoes
  useEffect(() => {
    fetch('https://api.thesneakerdatabase.com/v1/sneakers?limit=10&releaseYear=2020')
    .then(res => res.json())
    .then((data) => setSneakers(data.results))
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

        <div className="searchBoxContainer">
          <span>
            <i class="fas fa-search"></i>
          </span>
          <input
            className="searchBox"
            type="text"
            name="searchSneaker"
            placeholder="Sneakers..."
            onChange={handleChange}
            value={search}
          ></input>
          <button className="searchButton" type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>

        <div class="sneakers-container">{showSneakers}</div>
      </div>
    );
}

export default Home;