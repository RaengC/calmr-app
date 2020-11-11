import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

export const Navbar = ({ onClick, toggle }) => {
  return (
    <HashRouter>
      <div className={`slide-menu ${ toggle ? 'slide-in' : 'slide-out'}`}>
        <ul className="nav-bar">
          <NavLink onClick={onClick} to='/about'>Home</NavLink>
          <NavLink onClick={onClick} to='/articleForm'>Search for Podcast</NavLink>
          <NavLink onClick={onClick} to='/savedarticles'>Saved Podcasts</NavLink>
          <NavLink onClick={onClick} to='/login'>Your Account</NavLink>
          <NavLink onClick={onClick} to='/user/edit'>Update Profile</NavLink>

        </ul>
      </div>
    </HashRouter>
  )
}
