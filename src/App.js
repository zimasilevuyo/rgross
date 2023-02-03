import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="container" style={{ backgroundColor: "#bec5c9" }}>
      <h1 className="title">Enter your details</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleNameChange}
          value={name}
          className="input"
        />
        <input
          type="number"
          placeholder="Enter your age"
          onChange={handleAgeChange}
          value={age}
          className="input"
        />
      </div>
      {name && age ? (
        <h2 className="greeting">
          Hi {name}, you are {age} years old.
        </h2>
      ) : (
        <h2 className="greeting">Please enter your name and age</h2>
      )}
    </div>
  );
}

export default App;
