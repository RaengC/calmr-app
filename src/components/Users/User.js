import React, { Component } from 'react';
import {BrowserRouter , Switch , Route} from "react-router-dom";
import UserHome from "./UserHome";
import UserDashboard from "./UserDashboard"


class User extends Component {
  constructor() {
    super();
    this.state = {

    }
}
  render () {
    return (
      <div class="loginPage">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/User/UserHome"} component={UserHome} />
            <Route exact path={"/User/UserDashboard"} component={UserDashboard}/>

         </Switch>
        </BrowserRouter>
      </div>
    )
  }

}
export default User;
