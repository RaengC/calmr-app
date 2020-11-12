import React, {Component} from 'react';

import './Home.css';
import logo from "../Assets/lotus-flower.png";

class Home extends Component {

  render() {
    return (
      <div class="aboutInfo">
        <h2>Welcome to Calmr</h2>
          <p>Where we offer you a way to search for podcasts of your choosing or relax with inspirational videos.</p>
          <br></br>
          <p>The CalmrBot <img src={logo} className="logo"/> can assist you in searching for easy to use videos on assisting with stress reduction. It provides a small number of selected options for you. </p>
          <p>You can either click on the options  the CalmrBot provides or manually type in your selection.</p>
          <br></br>
          <p>If you would like to save any podcasts you find you have the option to create an account. </p>
          <p>As an account holder you can access your list of saved items and add comments or notes, which may assist you tracking how you are feeling at any specific time using the resource.</p>
      </div>
    )
  }
};

export default Home;
