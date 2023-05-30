import React from 'react'

function Error({error}) {
  return (
    error && <div className='alert alert-danger'>{error}</div> 
  )
}

export default Error;