import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import './App.css';

function App() {


  return (
    <div id="body">
      <div id="container">
        <div id="title">
          {/* <img src={require("./Rick_and_Morty.png")} height= "150px"/> */}
        </div>

        <h1 id="sub-title">Rick & Morty</h1>  

        
        <div id= "card-container">
          <Card />
        </div>
      </div>

    </div>

  );
}

export default App;





//import './Card.css';

// function App() {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get(
//         `https://rickandmortyapi.com/api/character`
//       );
//       setCharacters(response.data.results);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Rick and Morty Characters</h1>
//       <div className="flip-card-container">
//         {characters.slice(0, 60).map((character) => (
//           <div className="flip-card" key={character.id}>
//             <div className="flip-card-inner">
//               <div className="flip-card-front">
//                 <img src={character.image} alt={character.name} />
//                 <h2>{character.name}</h2>
//               </div>
//               <div className="flip-card-back">
//                 <h3>{character.name}</h3>
//                 <p>Status: {character.status}</p>
//                 <p>Species: {character.species}</p>
//                 <p>Gender: {character.gender}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;








 