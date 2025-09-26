import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

   // const [data , setdata ] = useState([])


    // async function getdata ()  {
    //     let response = await fetch("https://api.github.com/users/saranshsahu123")
    
    //     let getdata = await response.json()
    //     return getdata 
    // }



//     useEffect(() => {
//   fetch("https://api.github.com/users/saranshsahu123").then(response => response.json() ).then(response => {
//     console.log(response);
//     setdata(response)
//   })
//     } , [])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers : { data.followers}

    <img src={data.avatar_url} alt="git picture " />  
    </div>
  )
}

export default Github


export const githubInfoLoder = async () => {
    const response = await fetch('https://api.github.com/users/saranshsahu123')

    return response.json() 
}
