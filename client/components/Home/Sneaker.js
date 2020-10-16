import React, { Component } from 'react';
import noImage  from '../../assets/img/no-image.jpg';

const Sneaker = (props) => {
    const { addSneaker } = props;
    const { id, media, title, retailPrice, year } = props.data; 

    const showSneakerImage = (media.imageUrl !== null ? media.imageUrl : noImage );
 return (
   <div className="card">
     <header class="card-header">
       <p class="card-header-title">
         {title} - {year}
       </p>
     </header>
     <div class="card-content">
       <div class="content">
         <img className="sneaker-image" src={showSneakerImage} alt={title} />
         <br></br>
         <br></br>
         <p style={{ textAlign: "center" }}>Retail Price: ${retailPrice}</p>
       </div>
     </div>
     <footer class="card-footer" onClick={() => addSneaker(id)}>
       <a href="#" class="card-footer-item">
         <i class="fas fa-plus"></i>
         <span className="sneaker-add">Add</span>
       </a>
     </footer>
   </div>
 );   
}

export default Sneaker;
