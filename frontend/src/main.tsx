import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoginMain from './components/modules/LoginMain.tsx'
import RegisterMain from './components/modules/RegisterMain.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/modules/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:  <Home/>
      },
      {
        path: "/signup",
        element: <RegisterMain/>
      },
      {
        path: "/login",
        element: <LoginMain/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
