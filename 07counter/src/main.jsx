import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './compoenents/Layout.jsx'
import Home from './compoenents/Home/Home.jsx'
import About from './compoenents/About/About.jsx'
import Contact from './compoenents/Contact/Contact.jsx'
import User from './compoenents/User/User.jsx'
import Github , {githubInfoLoder} from './compoenents/Github/Github.jsx'

// const router = createBrowserRouter([

//   {
//     path : '/',
//     element : <Layout/>,
//     children: [{
//       path : "",
//       element : <Home/>
//     },
//   { path : "about",
//     element : <About/>
//   },
//   {
//     path : "contact-us",
//     element : <Contact/>
//   }
// ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<Contact/>}/>
      <Route  
      loader={githubInfoLoder}
      path='github' element={<Github/>}
/>
       <Route path='user/:userid' element={<User/>}/>


    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
