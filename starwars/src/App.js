import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from "./components/Character.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([]);
  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(characters => {
        console.log(characters);
          setCharacterData(characters.data.results);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {characterData.map((character) => (
        <Character key = {character.id} props = {character} />
      ))}
    </div>
  );
}

export default App;
