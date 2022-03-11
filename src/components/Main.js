import React from 'react';
import Header from '../components/Header';
import NameCard from './NameCard';
import data from '../data';
import '../styles/styles.css'
import Form from './Form';

const cards = data.map(item =>{
  return(
    <NameCard
      {...item}
    />
  )
})

function Main() {


  
  const [showForm, setShowForm] = React.useState(false)
  const [userData, setUserData] = React.useState(cards)
  const [user, setUser] = React.useState(0)
  
  function formOn(){
    setShowForm(prevShowForm => !prevShowForm)
    console.log(showForm)
  }
  
  function displayForm(){
    if(showForm === true){
      return(
        <Form/>
        )
      }
    }
    
    function deleteUser(user){
      let id = user + 1
      
      const newUserData = data.filter((item) => item.id !== id);
      
      setUserData(newUserData)
      console.log('clicked')
      
      console.log(newUserData)

      
    }
    
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
    <section>{userData[user]}</section>
    <div className='user-buttons'>
      <button className='user-change1' onClick={prevUser}>&#60; Previous</button>
    <div className='center-btns'>
      <button className='button-mid'>Edit</button>
      <button className='button-mid' onClick={() => deleteUser(user)}>Delete</button>
      <button className='button-mid' onClick={formOn}>New</button>
    </div>
      <button className='user-change2' onClick={nextUser}>Next &#62;</button>    
    </div>
    </div>
    <div>
      {displayForm(false)}
    </div>
    </>
    
  )

}

export default Main