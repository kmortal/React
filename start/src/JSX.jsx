import React from 'react'



function formatName(user){
  return user.firstName + ' ' + user.lastName
}

function getGreeting(user){
  if (user){
    return <h1 style={{backgroundColor: 'black',color: 'gold', margin:0, marginTop: '50vh', textAlign:'center'}}>Hello, {formatName(user)}.</h1>
  }

  return <h1 style={{color:'white', backgroundColor:'#5f5f5f'}}>Hello, Stranger</h1>
}

const user = {
  firstName: 'Kelvyn',
  lastName: 'Moraes'
}

//JSX = React Element(tags) = function
const JSX = getGreeting(user)
const elements = 
  <>
    <h1>Hello, World.</h1>
    <h2>Good to see you here</h2>
  </>

//formas equivalentes de criar um elemento
const element = <h1 className='greeting'>Hello, World</h1>
const element2 = 
React.createElement('h1', {className: 'greeting'}, 'Hello, World')

console.log(JSX)