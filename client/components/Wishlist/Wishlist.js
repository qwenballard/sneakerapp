import React, { Component, useState, useEffect } from 'react';
import WishlistItem from '../Wishlist/WishlistItem';
import { v4 as uuidv4 } from "uuid";

function Wishlist(props) {
  const [user, setUser] = useState(props);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const retreiveWishlist = () => {
     fetch("/profile/wishlist")
       .then((res) => res.json())
       .then((data) => {
         setWishlist(data);
       })
       .catch((err) => console.log(err));
  }

  useEffect(() => {
    setTimeout(retreiveWishlist, 300)
  }, [false]);

  return (
    <div>
      <p>{user.first_name}'s Wishlist</p>
      { wishlist.length === 0 ? <p>no shoes</p> : 
        <div>
          {wishlist.map((sneaker) => {
            return <WishlistItem key={uuidv4()} data={sneaker} />;
          })}
        </div>
      }
    </div>
  );
}

export default Wishlist;