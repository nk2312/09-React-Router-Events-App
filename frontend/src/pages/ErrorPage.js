import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error=useRouteError();
  return (
    <div>
        ErrorPage
        <p>{error.data.message}</p>
        <p>{error.status}</p>

    </div>
  )
}

export default ErrorPage