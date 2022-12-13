import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useFetchData } from './UserService'

export const UserComponent = () => {
    const res= useFetchData()
    useEffect(() => {
        console.log("loading",res.isLoading)
        console.log("data",res.data)
        console.log("error",res.error)
    }, [res.isLoading])

  return (
    <div>
         <button onClick={()=>res.refetch()}>Fetch Data</button>
            {
                res.isLoading && <CircularProgress/>

            }        </div>
  )
}
