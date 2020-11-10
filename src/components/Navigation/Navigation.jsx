import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Navigation extends Component {
  handleClick = (e) => {
    console.log("click", e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Calmr App">
          <Menu.Item key="5"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/about">About</Link></Menu.Item>
          <SubMenu key="sub3" title="User Account">
            <Menu.Item key="7"><Link to="/savedarticles">Saved Articles</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/signup">Sign Up</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/user/edit">Edit Account</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/logout">Logout</Link></Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    );
  }
}

export default Navigation;
