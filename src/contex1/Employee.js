import React, { useState } from 'react'
import { AddEmployee } from './AddEmployee'
import { AppContext } from './context'
import { ViewEmployee } from './ViewEmployee'

export const Employees = () => {

    const [employees, setemployees] = useState([
        {
            Id: 1,
            Name: 'John',
            Email: 'jhon@gmail.com',
            phone: '1234567890'
        }
    ])

    const dispatchEmployeeData =(type,payload)=>{
        switch(type){
            case 'ADD_EMPLOYEE':
                setemployees([...employees,payload])
                return
            case 'DELETE_EMPLOYEE':
                setemployees(employees.filter((employee)=>employee!==payload))
                return
            default:
                return


        }

    }
    

  return (
    <div>
        <AppContext.Provider value={{employees,dispatchEmployeeData}}>
            <AddEmployee/>
            <ViewEmployee/>
        </AppContext.Provider>
    </div>
  )
}