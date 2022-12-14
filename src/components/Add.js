import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export const Add = () => {

  var {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const submit = async (data) => {
    console.log(data);
    await axios.post("http://localhost:3000/product/add", data).then(res => {
      if (res.status === 200) {
        alert("Product Added Successfully")
      }
    }).catch(err => {
      console.log(err);
    })
  }


  return (
    <div>
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


      

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
