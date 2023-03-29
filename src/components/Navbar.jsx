import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import {jtlogo, menu, close } from "../assets"

const Navbar = () => {
  return (
    <nav 
    className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive(""); 
          window.scrollTo(0,0);}}>
            <img src={jtlogo} alt="logo" className='w-9 h-9 contain' />
          </Link>
          <p className='text-red-500'>test</p>
      </div>
    </nav>
  )
}

export default Navbar