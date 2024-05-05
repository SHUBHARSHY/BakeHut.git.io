import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div>
        <h1>Arey Mori Maiyaaa !!</h1>
        <h2>Jo ka dekh liyo...</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  )
}

export default Error