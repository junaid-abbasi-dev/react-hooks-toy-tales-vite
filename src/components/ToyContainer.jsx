import React from "react";
import ToyCard from "./ToyCard";
function ToyContainer({toys, removeToy, increaseLikes}) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return <ToyCard toy={toy} removeToy={removeToy} increaseLikes={increaseLikes} key={toy.id}/>
      })}
      
    </div>
  );
}

export default ToyContainer;
