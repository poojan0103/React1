import React from 'react'
import '../css/footer.css'

export const Footer = (props) => {
  return (
    <div className='footer'>
        Footer
        <h1>Country = {props.address.country}</h1>
        <h2>City = {props.address.city}</h2>
        <h3>state = {props.address.state}</h3>


    </div>
  )
}
