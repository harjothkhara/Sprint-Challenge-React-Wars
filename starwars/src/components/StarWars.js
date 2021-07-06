import React from 'react';
import './StarWars.css';

//Functional Component - Character! (traits) that takes in props

// Receiving each character's Data via a prop, the StarWars component can then call on different data 
// on each CharacterData element

const StarWars = props => {
    return (
        
        <div className="character">
            <h2>{props.banana.name}</h2>
            {/* specific character traits */}
            <p>Birth Year: {props.banana.birth_year}</p>
            <p>Created: {props.banana.created}</p>
            <p>Eye Color: {props.banana.eye_color}</p>
            <p>Gender: {props.banana.gender}</p>
            <p>Hair Color: {props.banana.hair_color}</p>
            <p>Height: {props.banana.height}</p>
            <p>Species: {props.banana.species}</p>
        
      </div>
    )
}

export default StarWars;