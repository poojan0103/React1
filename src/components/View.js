import React, { useEffect, useState } from 'react'
import axios from "axios";
import { getByTitle } from '@testing-library/react';
import { useForm } from 'react-hook-form';

export const View = () => {

    useEffect(() => {

        getAllTutorials();

    }, [])
    const [tut, setTut] = useState([]);

    const getAllTutorials = async () => {
        await axios
            .get("https://tutorialapi1.herokuapp.com/tutorial")
            .then((res) => {
                setTut(res.data);
                console.log("res data", res.data)
            })
            .catch((err) => { });
    };
 
    const [title, setTitle] = useState([]);

    const { register, handleSubmit } = useForm()


    const submit = async (data) => {

        await axios.get("https://tutorialapi1.herokuapp.com/tutorial2/" + data.title).then(res => {
            setTut(res.data)
        
        })
    }
    const sub = async(data) =>{
        await axios.get("https://tutorialapi1.herokuapp.com/tutorial1/"+data.published).then(res =>{
            setTut(res.data)
            console.log(data)
        })
    }

    const deleteTut = async (id) => {

        await axios.delete("https://tutorialapi1.herokuapp.com/tutorial" + id).then(res => {
            if (res.status === 200) {
                alert("Tutorial Deleted Successfully")
                getAllTutorials();
            }
            console.log(res)
        })
    }


    return (
        <div>
          <form onSubmit={handleSubmit(sub)}>
                Published<input type="text" {...register("title")}></input>
                <input type="submit"></input>
            </form>

            <form onSubmit={handleSubmit(submit)}>
                SEARCH<input type="text" {...register("title")}></input>
                <input type="submit"></input>
            </form>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Published</th>
                        <th scope="col">Fees</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tut.map(tut => {
                            return (
                                <tr>
                                    <th scope="row">{tut.id}</th>
                                    <td>{tut.title}</td>
                                    <td>{tut.description}</td>
                                    <td>

                                        {
                                            tut.published ? "true" : "false"
                                        }
                                    </td>
                                    <td>{tut.fees}</td>
                                    <td><button onClick={() => deleteTut(tut.Id)}>Delete</button>

                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};