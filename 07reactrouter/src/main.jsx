import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layouts from './Layouts.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createRef } from 'react'
import User from './components/User/User.jsx'
import Github  from './components/Github/Github.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layouts/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        // loader:{githubInfoLoader},
        path:"github",
        element:<Github/>
      }

    ]
  }
])



// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
