import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid}  = useParams()

  return (
    <div className='text-center bg-gray-500  p-5 text-xl font-bold'>
      User : {userid}
    </div>
  )
}

export default User
