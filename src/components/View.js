import React, { useEffect, useState } from 'react'
import axios from "axios";
import { getByTitle } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const View = () => {

    useEffect(() => {

        getAllProducts();

    }, [])
    const [product, setData] = useState([]);


    const getAllProducts = async () => {
        await axios
            .get("http://localhost:3000/product/get")
            .then((res) => {
                setData(res.data.data);
                console.log("res data", res.data)

            })
            .catch((err) => { });
    };
    {
        var name = "";
        useEffect(() => {
            // getAllProducts();
            name = localStorage.getItem("name");
        }, []);

        const [Product, setProduct] = useState([]);

        const { register, handleSubmit } = useForm()


        const deleteProduct = async (id) => {

            await axios.delete("http://localhost:3000/product/delete/" + id).then(res => {
                if (res.status === 200) {
                    alert("Product Deleted Successfully")
                    getAllProducts();
                }
                console.log(res)
            })
        }


        return (
            <div>
                

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">price</th>
                            <th scope="col">qunti</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            product.map(p => {
                                return (
                                    <tr>
                                        <th scope="row">{p._id}</th>
                                        <td>{p.name}</td>

                                        <td>{p.price}</td>
                                        <td>{p.qunti}</td>
                                        <td><button onClick={() => deleteProduct(p._id)}>Delete</button>

                                        </td>
                                        <Link  to = {`/update/${p._id}`}>
                                            <button>
                                            Update
                                            </button>
                                        </Link>

                                    </tr>
                                );
                            })
                        };
                    </tbody>
                </table>
            </div>
        );
    };
}