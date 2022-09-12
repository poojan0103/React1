import React from 'react'

export const StorageDemo = () => {
    const storeData = ()=>{

        localStorage.setItem('name','John')
        window.sessionStorage.setItem('name','Poojan')
        var user = {
            name:"ajay",
            age:25,
            token:"Abc14585"
        }
        localStorage.setItem('user',JSON.stringify(user))
    }
    const removeData = ()=>{
        localStorage.removeItem('name')
        sessionStorage.removeItem('name')
    }
  return (
    <div>
        <button onClick={storeData}>Store Data</button>
        <button onClick={removeData}>Remove Data</button>
    </div>
  )
}
