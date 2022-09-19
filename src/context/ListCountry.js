import React, { useContext } from 'react'
import { AppContext } from './context'


export const ListCountry = () => {
    const {countries,dispatchAction} = useContext(AppContext)

  return (
    <div>ListCountry

        {
            countries.map(c=>{
                return(
                    <ul>
                        <li>{c.name}</li>
                        <li>{c.capital}</li>
                        <li>{c.region}</li>
                        <li>{c.population}</li>
                        <li>
                            <button onClick={()=>dispatchAction("DELETE_COUNTRY",c)}>Delete</button>
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}

