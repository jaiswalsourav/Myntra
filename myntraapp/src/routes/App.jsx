
//import './App.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useSelector } from "react-redux"
import FetchItem from "../components/FetchItem"
import LoadingSign from "../components/LoadingSin"
import { Outlet } from "react-router-dom"

//import HomePage from "./components/HomePage"
//import { useSelector } from "react-redux"

       
function App() {
 const fetchStatus=  useSelector((store) => store.fetchStatus);
 console.log("fetchstaus",fetchStatus.fetchDone);
  
  return (
    <>
    <Header />
    <FetchItem/>
    {fetchStatus.fetchDone ? <Outlet /> : <LoadingSign/>}
    <Footer />
    </>
  )
}

export default App
