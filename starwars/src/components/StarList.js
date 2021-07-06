import React from 'react';
import StarWars from './StarWars';
import './StarWars.css';

//Functional Component - Character List! (each character display)


const StarList = props => {

    return props.characterData.map((characterData) => (
 // StarList receives the characterData, and needs to pass it down to StarWars as an array.

      <StarWars banana={characterData}/>
      //StarList will display each character through a React Component, 
     //which receives each Character's Data via a prop from the mapped array
    ))
  }

export default StarList;