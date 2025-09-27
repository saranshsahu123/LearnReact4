import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Profile from './component/Profile'
import Login from './component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
   <h1 className='font-bold text-center
   '>hello </h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
