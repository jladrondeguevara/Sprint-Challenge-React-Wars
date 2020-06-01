// Write your Character component here
import React from 'react';

const Character = (character) => {

    console.log(character.props);
    return (
        <div className = "character-wrapper">
            <div>
                <h1>{character.props.name}</h1>
                <img src = {character.props.image}></img>
            </div>
            <div className = "character-description">
                <p>Gender: {character.props.gender}</p>
                <p>Species: {character.props.species}</p>
                <p>Status: {character.props.status}</p>
            </div>
        </div>
    );
};

export default Character;