// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Character = () => {
    const [characterData, setCharacterData] = useState([]);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(characters => {
            console.log(characters.data.results);
        })
    }, [])

    return (
        <div>
            <h1>Character</h1>
        </div>
    );
};

export default Character;