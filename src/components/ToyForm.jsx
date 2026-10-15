import React from "react";
import { useState } from "react";
function ToyForm({form}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => {
        e.preventDefault()
        form(name, image)
      }}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
