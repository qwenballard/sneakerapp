import React, { Component, useState, useEffect } from 'react';

function WishlistSneaker(props){
  const { deleteSneaker } = props;
    const { sneaker_id, title, image_url, release_price, year, gender } = props.data;
    // console.log(sneaker_id);
    return (
      <div className={"card"}>
        <header class="card-header">
          <p class="card-header-title">
            {title} - {year} - {gender}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <img className="sneaker-image" src={image_url} alt={title} />
            <br></br>
            <br></br>
            <p style={{ textAlign: "center" }}>
              Retail Price: ${release_price}
            </p>
          </div>
        </div>
        <footer
          class="card-footer"
          onClick={(e) => {
            deleteSneaker(sneaker_id)
          }}
        >
          <a href="#" class="card-footer-item">
            <i class="fas fa-minus"></i>
            <span className="sneaker-add">Delete</span>
          </a>
        </footer>
      </div>
    );
}

export default WishlistSneaker;