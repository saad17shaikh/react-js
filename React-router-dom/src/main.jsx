import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home/Home'
import About from "./Components/About/About"
import Contact from './Components/Contact/Contact'
import Github from './Components/Github/Github'
// import App from './App'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='contact' element ={<Contact/>}/>
      <Route path='github' element ={<Github/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
