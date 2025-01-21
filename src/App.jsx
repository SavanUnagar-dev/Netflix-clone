import 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import './Components/responsive.css'

const App = () => {
  return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}> </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App