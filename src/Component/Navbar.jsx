import React from 'react'
import Buttons from './Buttons';
import Styles from '../style.js'
const Navbar = () => {
  return (
    <nav className={`${Styles.paddingX} font-semibold  flex gap-5 justify-between bg-[#183f2b] py-5 backdrop-opacity-95 text-lg`}>
      <div>Talus</div>
      <div>
        <ul className='flex gap-20 text-gray-400'>
          <li>Discover</li>
          <li>Services</li>
          <li>Community</li>
          <li>AboutUs</li>
        </ul>
      </div>
      <div className='flex gap-3'>
        <p>LogIn</p>
        <div><Buttons name="Register"/></div>
      </div>
    </nav>
  )
}

export default Navbar