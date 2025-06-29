
//import './App.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
//import HomePage from "./components/HomePage"
       
function App() {
 
  
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
