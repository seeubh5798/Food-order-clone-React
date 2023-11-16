import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
  return (
   
    <div>
        OOPs ! Error Occured
        <h1> {err?.data}</h1>
        
    </div>
  )
}

export default Error