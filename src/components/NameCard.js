import React from 'react';
import '../styles/styles.css';
import data from '../data';
import Main from './Main';

function NameCard(props) {
  return (
  
    <div className='card'>
      <div className='user-count'><h1 id='user-id'>{props.id}</h1><h1>/{data.length}</h1></div>
      <h1 className='user-name'><u className='user-under'>{props.name.first} {props.name.last}</u></h1>
      <p>
        <span className='user-titles'>From:</span> <span>{props.city}, {props.country}</span>
      </p>
      <p>
        <span className='user-titles'>Job Title:</span> <span>{props.title}</span>
      </p>
      <p>
        <span className='user-titles'>Employer:</span> <span>{props.employer}</span>
      </p>
      <br></br>
      <p className='user-titles'>
        Favorite Movies:
      </p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>1.</span> <span>{props.favoriteMovies[0]}</span>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2.</span> <span>{props.favoriteMovies[1]}</span>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>3.</span> <span>{props.favoriteMovies[2]}</span>
    </div>
  
  )
}

export default NameCard