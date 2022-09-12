import React from 'react'
import { SubHeader } from './SubHeader'

export const Header = (props) => {
    const style ={
        backgroundColor: '#333',
        color : '#fff',
        padding: '10px'
    }
  return (
    <div>Header
        <div style={style}>
            <h1>Header</h1>
            <h2>{props.uName}</h2>
        </div>
        <SubHeader uName = {props.uName}/>
    </div>
  )
}
