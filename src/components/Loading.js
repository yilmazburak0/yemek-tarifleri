import React from 'react'

function Loading({loading}) {
  return (
    loading && <div className='alert alert-warning'>Yükleniyor...</div> 
  )
}

export default Loading