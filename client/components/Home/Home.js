import React, { Component } from 'react';

function Home(props){

  //implement useState & useEffect to get shoes upon loading the page
  //https://api.thesneakerdatabase.com/v1/sneakers?limit=25&releaseYear=2020
  
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
      </div>
    );
}

export default Home;