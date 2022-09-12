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
    await axios.post("https://tutorialapi1.herokuapp.com/tutorial", data).then(res => {

      if (res.status === 200) {
        alert("Tutorial Add Successfully")
      }

    }).catch(err => {
      console.log(err);
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div class="form-group">
          <label for="exampleInputEmail1">title</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter title"
            {...register("title")}

          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">description</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter desc"
            {...register("description")}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">fees</label>
          <input
            type="integer"
            class="form-control"
            placeholder="Enter fees"
            {...register("fees")}
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">published</label>
          <input
            type="boolean"
            class="form-control"
            id="exampleInputEmail1"

            placeholder="Enter published"
            {...register("published")}
          />

        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
