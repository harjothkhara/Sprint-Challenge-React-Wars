import React from 'react';
import StarWars from './StarWars';
import './StarWars.css';

//Functional Component - Character List! (each character display)

const StarList = props => {
    return props.starwarsChars.map((input, index) => (
      <StarWars
       name={input.name}
       birth_year={input.birth_year}
       created={input.created}
       gender={input.gender}
       hair_color={input.hair_color}
       height={input.height}
       species={input.species}
       key={index}
       />
    ))
  }


export default StarList;