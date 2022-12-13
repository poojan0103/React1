import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


export const Update = () => {
const navigate = useNavigate();
  var id = useParams().id
  var {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [Product, setproduct] = useState({});
  const updateproduct = async (data) => {
    await axios
      .put("http://localhost:3000/product/update/" + id, data)
      .then((res) => {
        if (res.status === 200) {
          alert("Product Update Successfully")
        
      }

{/*        
      */}
        console.log(res.data.data)
      });
  };
  const submit = (data) => {
    setTimeout(() => {
          navigate("/view");
        }, 100);
    console.log(data);
    var obj = {
      name: data.name,
      price: data.price,
      qunti: data.qunti
    };
    updateproduct(obj);
  };
  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Name"
            {...register("name")}

          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">price</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Price"
            {...register("price")}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">qunti
          </label>
          <input
            type="integer"
            class="form-control"
            placeholder="Enter Qunty"
            {...register("qunti")}
          />
        </div>
        <button type="submit" class="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};
