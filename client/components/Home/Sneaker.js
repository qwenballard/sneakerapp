import React, { Component } from 'react';


const Sneaker = (props) => {
    console.log(props.data);
    const { media, title, retailPrice, year } = props.data;
 return (
     <div>
         <img className='sneaker-image' src={media.imageUrl} />
         <p>{title} - <span>({ year })</span></p>
     </div>
 )   
}

export default Sneaker;