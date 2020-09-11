import React, { Component } from 'react';

function Home(props){
    return (
      <div>
        <div>
          <section class="hero is-info is-large">
            <div class="hero-body">
              <div class="container">
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