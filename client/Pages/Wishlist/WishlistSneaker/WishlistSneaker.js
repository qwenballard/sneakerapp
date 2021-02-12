import React, { Component, useState, useEffect } from 'react';
import "./WishlistSneaker.scss";


function WishlistSneaker(props){
  const { deleteSneaker } = props;
    const { sneaker_id, title, image_url, release_price, year, gender } = props.data;
    // console.log(sneaker_id);
    return (
      <div className="wishlistSneakerContainer">
        <header className="wishlistSneakerTitle">
          <p>
            {title} - {year} - {gender}
          </p>
        </header>
        <div>
          <div class="wishlistSneakerImage">
            <img className="sneaker-image" src={image_url} alt={title} />
            <br></br>
            <br></br>
            <p className="wishlistSneakerRetailPrice">
              Retail Price: ${release_price}
            </p>
          </div>
        </div>
        <footer class="addSneaker">
          <a href="#" class="card-footer-item">
            <i class="fas fa-minus"></i>
            <span
              className="addSneakerText"
              onClick={(e) => {
                deleteSneaker(sneaker_id);
              }}
            >
              Delete
            </span>
          </a>
        </footer>
      </div>
    );
}

export default WishlistSneaker;