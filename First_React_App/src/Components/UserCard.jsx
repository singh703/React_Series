import React from 'react'
import anu from '../assets/anu.jpg.jpg'
import "./UserCard.css"

const UserCard  = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={anu} alt="Thakur" height='195px' width='165' />
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
