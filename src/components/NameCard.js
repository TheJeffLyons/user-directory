import React from 'react';
import '../styles/styles.css';
import data from '../data';
import Main from './Main';

function NameCard(props) {
  return (
  
    <div className='card'>
      <h1>{props.name.first} {props.name.last}</h1>
      <p>
        <span>From:</span> <span>{props.city}, {props.country}</span>
      </p>
      <p>
        <span>Job Title:</span> <span>{props.title}</span>
      </p>
      <p>
        <span>Employer:</span> <span>{props.employer}</span>
      </p>
      <br></br>
      <p>
        Favorite Movies:
      </p>
        <span>1.</span> <span>{props.favoriteMovies[0]}</span>
        <br></br>
        <span>2.</span> <span>{props.favoriteMovies[1]}</span>
        <br></br>
        <span>3.</span> <span>{props.favoriteMovies[2]}</span>
    </div>
  
  )
}

export default NameCard