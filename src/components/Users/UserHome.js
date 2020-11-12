import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './User.css'

const UserHome = (props) => {
const handleClick = () => {
    axios.delete('http://localhost:3000/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

return (
    <div className="login-menu">
      <Link to='/login/login' className="links" >Log In</Link>
        <br></br>
      <Link to='/signup' className="links" >Sign Up</Link>
        <br></br>
      <Link to='/EditProfile' className="links" >Edit Profile</Link>
        <br></br>
      {
        props.loggedInStatus ?
          <Link to='/logout' onClick={handleClick}>Log Out</Link> : null
      }
    </div>
  );
};
export default UserHome;
