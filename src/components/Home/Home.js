import React, {Component} from 'react';

import './Home.css';
import logo from "../Assets/lotus-flower.png";

class Home extends Component {

  render() {
    return (
      <div class="homeInfo">
        <h2>Welcome to Calmr</h2>
          <p>Where we offer you a way to search for podcasts of your choosing or relax with inspirational videos.</p>
          <br></br>
          <p>The CalmrBot <img src={logo} atl="lotus flower image logo" className="logo"/> can assist you in searching for easy to use videos on assisting with stress reduction. It provides a small number of selected options for you. </p>
      </div>
    )
  }
};

export default Home;
