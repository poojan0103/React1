import React from 'react'

export const Users = () => {
    var users = [
        {
            name:"jay",
            age:20,
            location:"bangalore"
        },
        {
            name:"raj",
            age:25,
            location:"Pune"
        },
        {
            name:"parth",
            age:15,
            location:"Gujrat"
        }
    ]
  return (
    <div>
        
            {
                users.map((user)=>{
                    return(
                        <ul>
                            <li>{user.name}</li>
                        </ul>
                    )
                })
            }
        
            
    </div>
  )
}
