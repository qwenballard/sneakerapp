import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Sneaker.scss';
import noImage from "../../../assets/img/no-image.jpg";

const Sneaker = (props) => {
    const { addSneaker } = props;
    const { id, media, title, retailPrice, year } = props.data; 

    const showSneakerImage = (media.imageUrl !== null ? media.imageUrl : noImage );
 return (
   <div className="sneakerContainer">
     <header className="sneakerTitle">
       <p>
         {title} ({year})
       </p>
     </header>
     <div>
       <div className="sneakerImage">
         <img src={showSneakerImage} alt={title} />
         <br></br>
         <br></br>
         <p className="sneakerRetailPrice">Retail Price: ${retailPrice}</p>
       </div>
     </div>
     <footer className="addSneaker">
       <a href="#">
         <i class="fas fa-plus"></i>
         <span className="addSneakerText" onClick={() => addSneaker(id)}>
           Add Sneaker
         </span>
         <br></br>
       </a>
       <Link className="viewMoreText" to={`/sneakers/${id}`}>
         View More
       </Link>
     </footer>
   </div>
 );   
}

export default Sneaker;
