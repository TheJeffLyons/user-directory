import React from 'react';
import Header from '../components/Header';
import NameCard from './NameCard';
import data from '../data';
import '../styles/styles.css'

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
    if(user < 24){
      setUser(user + 1)
    }
  }

  const prevUser = () => {
   if(user > 0){
     setUser(user - 1)
   }
  }

  return (
    <>
    <Header/>
    <div className='user-card-main'>
    <section>{cards[user]}</section>
    <div className='user-buttons'>
      <button className='user-change1' onClick={prevUser}>Previous</button>
    <div className='center-btns'>
      <button className='button-mid'>Edit</button>
      <button className='button-mid'>Delete</button>
      <button className='button-mid'>New</button>
    </div>
      <button className='user-change2' onClick={nextUser}>Next</button>    
    </div>
    </div>
    </>
    
  )

}

export default Main