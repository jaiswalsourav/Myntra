import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx' // Assuming you have an App component
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from './routes/Bag.jsx'// Assuming you have a Bag component 
import Home from './routes/Home.jsx'
import {Provider} from 'react-redux' // Assuming you have a BagPage component
import myntraStore from './store/index.js'

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
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
