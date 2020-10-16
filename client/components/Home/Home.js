import React, { Component, useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

//unable to retreive images from assets folder.
import heroImage from '../../assets/img/hero.jpeg';

import Sneaker from './Sneaker.js';

function Home(props){
  const [sneakers, setSneakers] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
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
      <div>
        <div class="sneaker-hero-section">
          <img className="sneaker-hero" src={heroImage} />
        </div>

        <div class="field search-bar">
          <p class="control has-icons-left">
            <i class="fas fa-search"></i>
            <input
              class="input"
              type="text"
              name="sneaker"
              placeholder="Search for sneaker by name"
              onChange={handleChange}
              value={search}
            ></input>
          </p>
          <button
            class="search-button button is-info is-outlined"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>

        <div class="sneaker-container">{showSneakers}</div>
      </div>
    );
}

export default Home;