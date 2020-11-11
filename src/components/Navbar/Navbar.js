import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

export const Navbar = ({ onClick, toggle }) => {
  return (
    <HashRouter>
      <div className={`slide-menu ${ toggle ? 'slide-in' : 'slide-out'}`}>
        <ul className="nav-bar">
          <NavLink onClick={onClick} to='/'>Home</NavLink>
          <NavLink onClick={onClick} to='/about'>About</NavLink>
          <NavLink onClick={onClick} to='/articleDisplay'>Articles</NavLink>
          <NavLink onClick={onClick} to='/savedarticles'>Saved Articles</NavLink>
          <NavLink onClick={onClick} to='/login'>Login/Create Account</NavLink>
          <NavLink onClick={onClick} to='/user/edit'>Update Profile</NavLink>
          <NavLink onClick={onClick} to='/logout'>Logout</NavLink>
        </ul>
      </div>
    </HashRouter>
  )
}
