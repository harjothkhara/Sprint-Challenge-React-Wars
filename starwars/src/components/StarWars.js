import React from 'react';
import './StarWars.css';

//Functional Component - Character! (traits)

function StarWars (props) {
    return (
        
        <div className="character">
            <h2>{props.name}</h2>

            <p>Birth Year: {props.birth_year}</p>
            <p>Created: {props.created}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Height: {props.height}</p>
            <p>Species: {props.species}</p>
        
      </div>
    )

}

export default StarWars;