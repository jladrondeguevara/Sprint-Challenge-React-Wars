// Write your Character component here
import React from 'react';
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-width: 5px;
    border-style: solid;
    margin: 5rem 15rem 5rem 15rem;
`

const Character = (character) => {

    // console.log(character.props);
    return (
        <Div>
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
        </Div>
    );
};

export default Character;