import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx' // Assuming you have an App component
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from './routes/Bag.jsx'// Assuming you have a Bag component 
import Home from './routes/Home.jsx' // Assuming you have a BagPage component

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home /> }, // Define the root route
      { path: '/bag', element: <Bag /> }, // Define the BagPage route
  ],
},
   // Assuming you have a BagPage component
]); 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
