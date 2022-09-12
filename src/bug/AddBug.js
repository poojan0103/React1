import React, { useState } from "react";
import { BugForm } from './BugForm'
import { ListBug } from './ListBug'

export const AddBug = () => {
    var [bugs, setbugs] = useState(
        [
           {
               id: 1,
               title: 'Bug 1',
               description: 'Bug 1 description',
               status: 'New',
               isActive:true
           }
          
       ])

       const insertBug =(bug)=>{
        console.log("insert bug ...")
        console.log(bug)
        setbugs([...bugs,bug])
       }
    const deleteBug =(bug)=>{
        console.log(bug)
        bugs = bugs.filter(bugs=>{return bugs.id!==bug.id})
        setbugs(bugs)
        
    }
    
  return (
    <div>
        <BugForm insertBug = {insertBug}/>
        <ListBug bugs = {bugs}deleteBug = {deleteBug}/>
    </div>
  )
}
