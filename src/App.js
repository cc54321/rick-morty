import 'bootstrap/dist/css/bootstrap.css'
import BasicExample from './components/Rows';
import { useEffect, useState } from 'react';


const DATA_URL_RICK = "https://rickandmortyapi.com/api/character"

const DATA_URL_MORTY = "https://rickandmortyapi.com/api/character/?page=2"


function App() {

const [cardData, updateCards] = useState([])
const [pageData, updatePage] = useState([])

  useEffect(() => {

  
    
    // const moviesData = []
    fetch(DATA_URL_RICK)
    .then((result) => result.json())
    .then((result) => {
      updateCards(result.results)

    });
  
    }, [])


    useEffect(() => {

   
      // const moviesData = []
      fetch(DATA_URL_MORTY)
      .then((result) => result.json())
      .then((result) => {
        updatePage(result.results)
  
      });
    
      }, [])

      


  return (
    <div className="App">
      
      <BasicExample data = {cardData} page = {pageData}/>

      
    </div>
  );
}

export default App;

