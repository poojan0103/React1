import React , { useState }from 'react'

export const GetStoreData = () => {
   
    const [name, setname] = useState();
    const getData = () => {
      //var name = localStorage.getItem("name");
      var name = window.sessionStorage.getItem("name");
      setname(name);
    };
    return (
      <div>
        {name}
        <button onClick={getData}>getData</button>
      </div>
    );
  };