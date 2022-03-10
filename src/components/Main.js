import React from 'react';
import Header from '../components/Header';
import NameCard from './NameCard';
import data from '../data';

function Main() {

  const cards = data.map(item =>{
    return(
      <NameCard
        {...item}
      />
    )
  })
  
  const [user, setUser] = React.useState(0)

  const nextUser = () => {
    setUser(user + 1)
  }

  const prevUser = () => {
    setUser(user - 1)
  }
  return (
    <>
    <Header/>
    <section>{cards[user]}</section>
    <button onClick={prevUser}>Previous</button>
    <button>Edit</button>
    <button>Delete</button>
    <button>New</button>
    <button onClick={nextUser}>Next</button>    
    </>
    
  )

}

export default Main