import React from 'react'
import {useParams, useSearchParams} from "react-router-dom"

export const User = () => {
    const {data} = useParams()
  return ( 
    <div>User: {data}
    </div>
  )
}
