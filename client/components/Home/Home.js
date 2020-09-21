import React, { Component, useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

//unable to retreive images from assets folder.
// import heroImage from '../../assets/img/hero.jpeg';

import Sneaker from './Sneaker';

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

  useEffect(() => {
    fetch('https://api.thesneakerdatabase.com/v1/sneakers?limit=10&releaseYear=2020')
    .then(res => res.json())
    .then((data) => setSneakers(data.results))
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setSearch("");
  }, [sneakers]);
  
    const showSneakers = sneakers.map((sneaker) => {
      return <Sneaker key={uuidv4()} data={sneaker} />
    })

    const heroImage = `https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80`;

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