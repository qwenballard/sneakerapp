import React, { Component, useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

import Sneaker from './Sneaker'

function Home(props){
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch('https://api.thesneakerdatabase.com/v1/sneakers?limit=10&releaseYear=2020')
    .then(res => res.json())
    .then((data) => setSneakers(data.results))
    .catch(err => console.log(err));
  }, []);
  //implement useState & useEffect to get shoes upon loading the page
  //https://api.thesneakerdatabase.com/v1/sneakers?limit=25&releaseYear=2020
  
    const showSneakers = sneakers.map((sneaker) => {
      return <Sneaker key={uuidv4()} data={sneaker} />
    })

    return (
      <div>
        <div>
          <section class="hero is-info is-large">
            <div class="hero-body">
              <div>
                <h1 class="title">Large title</h1>
                <h2 class="subtitle">Large subtitle</h2>
              </div>
            </div>
          </section>
        </div>

        <div class="field search-bar">
          <p class="control has-icons-left">
            <i class="fas fa-search"></i>

            <input
              class="input"
              type="text"
              placeholder="Search for sneaker by name"
            ></input>
          </p>
        </div>
        { showSneakers }
      </div>
    );
}

export default Home;