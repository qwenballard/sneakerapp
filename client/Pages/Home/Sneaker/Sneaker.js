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
     <div className="sneakerTitle">
       <p>
         {title} ({year})
       </p>
     </div>
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
         <i className="fas fa-plus"></i>
         <span className="addSneakerText" onClick={() => addSneaker(id)}>
           Add Sneaker
         </span>
         <br></br>
       </a>
       <a className="viewMoreText" to={`/sneakers/${id}`}>
         View More
       </a>
     </footer>
   </div>
 );   
}

export default Sneaker;
