import React, {useState} from "react";
import { useForm } from "react-hook-form";
export const StudentRegister = () => {
var cities = [
    {
      name:"Hyderabad",
    },
    {
      name:"Bangalore",
    },
    {
      name:"Chennai",
    }
  ]
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submit = (data) => {
    console.log("form data", data);
    

  };

  
  
  console.log("errors", errors);
  
  const validationSchma = {
    phone :{
      pattern:{
        value: /^[6-9]{1}[0-9]{9}$/,
        message: "Phone number must be 10 digits"
      }
    },
    
  age: {
    required: "required...",

    min: {
      value: 18,
      message: "Age 18 is Minimum",
    },
    max: {
      value: 65,
      message: "Age 65 is Maximum",
    }
  }
  
};
  return (
    <div>
         <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "name is required..." })}
          ></input>
          {errors.name && <div>{errors.name.message}</div>}
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" {...register("email")}></input>
        </div>

        <div>
          <label>Phone</label>
          <input type="text" name="phone" {...register("phone",validationSchma.phone)}></input>
          {
            errors.phone && <div>{errors.phone.message}</div>
          }
        </div>


        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            {...register("age", validationSchma.age)}
          ></input>
          {errors.age && <div>{errors.age.message}</div>}
          
          <div>
                        <label> Gender :  <br></br>
                            <input
                                {...register('gender', { required: true })}
                                type="radio"
                                name="gender"
                                value="Male"
                            />{' '}
                            Male
                        </label>
                    </div>

          <div>
          <label>
                            <input
                                {...register('gender', { required: true })}
                                type="radio"
                                name="gender"
                                value="Female"
                            />{' '}
                            Female
                        </label>
          </div>
          <div>
                        {errors.gender?.type === 'required' && 'please select any one '}
                    </div><br></br>
          <div>
            <label>Hobbies</label>
            <input type="checkbox" name="hobbies" value="reading" {...register("hobby")}></input> READING
            <input type="checkbox" name="hobbies" value="Writing" {...register("hobby")}></input> Writing
            <input type="checkbox" name="hobbies" value="Traveling" {...register("hobby")}></input> Traveling
          </div>
          <div>
            <label></label>
            <select name="city" {...register("city")}>
            <option value="">SELECT CITY</option>    
            {
              cities.map(city=>{
                return (
                  <option value={city.name}>{city.name}</option>    
                )
              })
            }
            </select>
            
              
              
          </div>
          <input type="submit" disabled={Object.keys(errors).length!==0?true:false} value="Submit"></input>
        </div>
      </form>
    </div>
  );
};
  