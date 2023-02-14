import React, { useState } from 'react'

import {FaBars} from "react-icons/fa"
import { Link, useLocation} from 'react-router-dom'
import Sidebar from './Sidebar'
import logo from "../src/images/logo.png"
const Navbar = () => {
 
const location = useLocation()
const {pathname} = location
const splitLocation = pathname.split("/")
const [isSidebarOpen,setIsSidebarOpen] = useState(false)

const openSidebar = () =>{
setIsSidebarOpen(true)
}
const closeSidebar = () => {
  setIsSidebarOpen(false)
}
  return (
    <>
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to={`/`}>
              <img src={logo} alt='' className='logo' />
            </Link>
            <button className='btn-toggle' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li className={splitLocation[1] === '' ? 'active' : ''}>
              <Link to='/'>home</Link>
            </li>
            <li className={splitLocation[1] === 'about' ? 'active' : ''}>
              <Link to='/about'>about</Link>
            </li>
            <li className={splitLocation[1] === 'projects' ? 'active' : ''}>
              <Link to='/projects'>projects</Link>
            </li>
            <li className={splitLocation[1] === 'contact' ? 'active' : ''}>
              <Link to='/contact'>contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
    </>
  )
}

export default Navbar