import React,{ useState}from 'react'

export const RegisterBug = () => {
    const [title,settitle] = useState('')
    const [description,setdescription] = useState('')

    const descriptionHandler = (e)=>{
        console.log(e.target.value)
        setdescription(e.target.value)
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        alert(`Title: ${title} \n Description: ${description}`)
    };
  return (
    <div>
        <form onSubmit={submitHandler}>
        <table>
          <tr>
            <td>Enter Title</td>
            <td>
              <input type="text" name="title" onChange={(e)=>{settitle(e.target.value)}}></input>
            </td>
          </tr>
          <tr>
            <td>Enter description</td>
            <td>
              <input type="text" name="description" onChange={(e)=>{descriptionHandler(e)}}></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="Submit"></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

