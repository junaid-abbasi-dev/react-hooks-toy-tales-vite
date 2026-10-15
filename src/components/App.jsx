import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function fetchToys() {
    fetch('http://localhost:3001/toys')
      .then(r => {
        if (!r.ok) { throw new Error("Error fetching toys..")}
        return r.json()
      })
      .then(d => setToys(d))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchToys()
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function submitForm(name, image) {
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0,
      }),
    })
    .then(r => {
      if (!r.ok) {throw new Error("Error posting object")}
      return r.json()
    })
    .then(newToy => {
      setToys(toys => [...toys, newToy])
    })
  }
  function removeToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(r => {
      if (!r.ok) { throw new Error("Error deleting toy") }
      setToys(toys => toys.filter(toy => toy.id !== id))
    })
  }
  function increaseLikes(id, likes) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: likes,
      })
    })
      .then(r => {
        if (!r.ok) {throw new Error("Error updating likes")}
        return r.json()
      })
      .then(updatedToy => {
        setToys(toys => toys.map(toy => toy.id === updatedToy.id ? updatedToy : toy))
      })
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm form={submitForm}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} removeToy={removeToy} increaseLikes={increaseLikes}/>
    </>
  );
}

export default App;
