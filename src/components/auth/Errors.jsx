import React from 'react'

const Errors = ({error}) => {
  
  return (
    <div className='w-full h-8 bg-red-500 text-white text-center text-sm py-1 rounded-sm'>{error.message}</div>
  )
}

export default Errors