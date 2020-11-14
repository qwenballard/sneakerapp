import React, { Component, useState, useEffect } from 'react';
import WishlistItem from './WishlistItem.js';
import { v4 as uuidv4 } from "uuid";

function Wishlist(props) {
  const [user, setUser] = useState(props);
  const [wishlist, setWishlist] = useState([]);

  const retreiveWishlist = () => {
     fetch("/profile/wishlist")
       .then((res) => res.json())
       .then((data) => {
         setWishlist(data);
       })
       .catch((err) => console.log(err));
  }

      const deleteSneaker = (sneaker_id) => {
        fetch(`http://localhost:8080/deletesneaker/${sneaker_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));

          const newWishList = wishlist.filter((sneaker) => sneaker.sneaker_id !== sneaker_id);
          setWishlist(newWishList);
      };

  useEffect(() => {
    setTimeout(retreiveWishlist, 300)
  }, []);


  return (
    <div>
      <p className='wishlist-user'>{user.first_name}'s Wishlist</p>
      {wishlist.length === 0 ? (
        <p>no shoes</p>
      ) : (
        <div className="sneaker-container">
          {wishlist.map((sneaker) => {
            return (
              <WishlistItem
                key={uuidv4()}
                data={sneaker}
                deleteSneaker={deleteSneaker}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Wishlist;