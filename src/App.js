import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/?page=1"
      );
      setCharacters(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <div className="flip-card-container">
        {characters.slice(0, 60).map((character) => (
          <div className="flip-card" key={character.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
              </div>
              <div className="flip-card-back">
                <h3>{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;








 