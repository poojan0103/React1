import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from './context'
import { ADD_COUNTRY } from '../constant'

export const AddCountry = () => {
    const {dispatchAction} = useContext(AppContext)

    const {register,handleSubmit} = useForm()
    const submit =(data) => {
        dispatchAction(ADD_COUNTRY,data)
    }
  return (
    <div>AddCountry

    <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name")}></input>
        <input type="text" {...register("capital")}></input>
        <input type="text" {...register("region")}></input>
        <input type="text" {...register("population")}></input>
        <button type="submit">Add</button>
    </form>
</div>
)
}