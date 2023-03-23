
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './Card.css';

function Card(){

  const [characters, setCharacter] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
        // Call fetch as usual
        const res = await fetch(
        `https://rickandmortyapi.com/api/character`
        );

        
        const json = await res.json();

        // posts into state
       
        setCharacter(json.results.map(
            c => { 
                return{
                'id': c.id,
                'characterImage': c.image,
                'name': c.name, 
                'gender': c.gender, 
                'species': c.species,
                'characterStatus': c.status 
                }

            }
        
    ));
    }

    fetchData();
  }, [ ]); 

  
  return (
      characters.map(character =>(
        <div id="card">
            <img id ="character-image" src = {character.characterImage} alt="Character Image"/>
            <ul>
                <li>{character.name}</li>
                <li>{character.gender}</li>
                <li>{character.species}</li>
                <li>{character.characterStatus}</li>
            </ul>
        </div>



      )
      )
  );
}


export default Card;