import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./Menu.css";

class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }
    return (
      <div class="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}>

          <h2><a href="#"><Link to="/about">About</Link></a></h2>
          <h2><a href="#"><Link to="/articleDisplay">Article</Link></a></h2>
          <h2><a href="#"><Link to="/">Home</Link></a></h2>
          <h2><a href="#"><Link to="/savedarticles">Saved Articles</Link></a></h2>
          <h2><a href="#"><Link to="/login">Login</Link></a></h2>
          <h2><a href="#"><Link to="/login/userhome">Create New Account</Link></a></h2>
          <h2><a href="#"><Link to="/user/edit">Edit Account</Link></a></h2>
          <h2><a href="#"><Link to="/logout">Logout</Link></a></h2>
      </div>
    )
  }
}

export default Menu;
