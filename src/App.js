import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App