import React from "react";
import { useState } from "react";

function ToyCard({toy, removeToy, increaseLikes}) {

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => increaseLikes(toy.id, toy.likes + 1)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => removeToy(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
