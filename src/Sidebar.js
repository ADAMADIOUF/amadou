import React from 'react'
import {  FaTimes } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
const Sidebar = ({ isSidebarOpen, closeSidebar }) => {

const location = useLocation()
const { pathname } = location
const splitLocation = pathname.split('/')
  return (
    <aside className={`${isSidebarOpen ? 'sidebar showSidebar' : 'sidebar'}`}>
      <button className='btn-close' onClick={closeSidebar}>
        <FaTimes />
      </button>

      <div className='sidebar-links'>
        <ul className='nav-links-sidebar'>
          <li className={splitLocation[1] === '' ? 'active' : ''}>
            <a href='/'>home</a>
          </li>
          <li className={splitLocation[1] === 'about' ? 'active' : ''}>
            <a href='/about'>about</a>
          </li>
          <li className={splitLocation[1] === 'projects' ? 'active' : ''}>
            <a href='/projects'>projects</a>
          </li>
          <li className={splitLocation[1] === 'contact' ? 'active' : ''}>
            <a href='/contact'>contact</a>
          </li>
         
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar