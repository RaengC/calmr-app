import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
// import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons";

import MenuButton from './MenuButton';
import Menu from './Menu';
import './Navigation.css'
// const { SubMenu } = Menu;

class Navigation extends Component {
  // handleClick = (e) => {
  //   console.log("click", e);
  // }

  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      // Slide Navigation
    <div>
      <MenuButton handleMouseDown={this.handleMouseDown} />
      <Menu handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible} />
    </div>


  // css for this
      // <div class="container">
      //   <div id="mySidenav" class="sidenav">
      //     <a href="javascript:void(0)" class="closebtn" onClick="closNav()">&times;</a>
      //     <a href="#"><Link to="/about">About</Link></a>
      //     <a href="#"><Link to="/articleDisplay">Article</Link></a>
      //     <a href="#"><Link to="/">Home</Link></a>
      //     <a href="#"><Link to="/savedarticles">Saved Articles</Link></a>
      //     <a href="#"><Link to="/login">Login</Link></a>
      //     <a href="#"><Link to="/login/userhome">Create New Account</Link></a>
      //     <a href="#"><Link to="/user/edit">Edit Account</Link></a>
      //     <a href="#"><Link to="/logout">Logout</Link></a>
      //   </div>
      //
      //   <span style={{fontSize: "30px", cursor: "pointer"}} onClick={this.openNav}>&#9776;open</span>
      // </div>


      // <div class="container">
      //   <div class="row"><Link to="/">Home</Link></div>
      //   <div class="row"><Link to="/about">About</Link></div>
      //   <div class="row"> <Link to="/articleDisplay">Article</Link></div>
      //   <div></div>
      // </div>


      // <Menu
      //   onClick={this.handleClick}
      //   style={{ width: 256 }}
      //   defaultSelectedKeys={["1"]}
      //   defaultOpenKeys={["sub1"]}
      //   mode="inline"
      // >
      //   <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Calmr App">
      //     <Menu.Item key="5"><Link to="/">Home</Link></Menu.Item>
      //     <Menu.Item key="6"><Link to="/about">About</Link></Menu.Item>
      //     <Menu.Item key="13"><Link to="/articleDisplay">Article</Link></Menu.Item>
      //     <SubMenu key="sub3" title="User Account">
      //       <Menu.Item key="7"><Link to="/savedarticles">Saved Articles</Link></Menu.Item>
      //       <Menu.Item key="8"><Link to="/login">Login</Link></Menu.Item>
      //       <Menu.Item key="9"><Link to="/login/userhome">Create New Account</Link></Menu.Item>
      //       <Menu.Item key="10"><Link to="/user/edit">Edit Account</Link></Menu.Item>
      //       <Menu.Item key="11"><Link to="/logout">Logout</Link></Menu.Item>
      //     </SubMenu>
      //   </SubMenu>
      // </Menu>
    );
  }
}

export default Navigation;
