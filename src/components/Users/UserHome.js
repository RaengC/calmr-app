import React, { Component } from 'react';
import Registration from "./auth/Registration"

class UserHome extends Component {
  constructor() {
    super();
    this.state = {

    }
}
  render () {
    return (
      <div>
          <h1>UserHome</h1>
          <h1>UserHome1</h1>
          <Registration />
      </div>
    )
  }

}
export default UserHome;
