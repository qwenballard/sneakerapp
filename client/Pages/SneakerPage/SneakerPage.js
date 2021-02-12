import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SneakerPage.scss";

//import noImage from "../../../assets/img/no-image.jpg";

const SneakerPage = (props) => {
  const [sneaker, setSneaker] = useState({});
  let { id } = useParams();

  const fetchSneaker = (id) => {
    console.log(id);
    fetch(`https://api.thesneakerdatabase.com/v1/sneakers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0]);
        setSneaker(data.results[0]);
        return data.results[0];
      })
  };

  useEffect(() => {
    fetchSneaker(id);
    () => {
        console.log('take down sneaker');
    }
  }, []);

  // const showSneakerImage = media.imageUrl !== null ? media.imageUrl : noImage;
  return (
    <div className="sneakerPageContainer">
      <h1>Sneaker Page</h1>
      <p>sneakerId: {sneaker.name}</p>
      <p>sneakerId: {sneaker.year}</p>
    </div>
  );
};

export default SneakerPage;
