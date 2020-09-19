import React, { Component } from 'react';


const Sneaker = (props) => {
    // console.log(props.data);
    const { media, title, retailPrice, year } = props.data;

    const showSneakerImage = (media.imageUrl !== null ? media.imageUrl : `https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg`);
    console.log(showSneakerImage);
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
     <footer class="card-footer">
       <a href="#" class="card-footer-item">
         <i class="fas fa-plus"></i>
         <span className="sneaker-add">Add</span>
       </a>
       <a href="#" class="card-footer-item">
         <i class="fas fa-minus"></i>
         <span className="sneaker-add">Delete</span>
       </a>
     </footer>
   </div>
 );   
}

export default Sneaker;
