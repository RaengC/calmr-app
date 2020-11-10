import React, {Component} from 'react';

import './About.css';
import logo from "../Assets/lotus-flower.png";

class About extends Component {
  render() {
    return (
      <div class="aboutInfo">
        <h1>The Calmr App</h1>
        <p>The Calmr app offers you a quick way to search for a small number of resources and links to help you through your day.  </p>
        <p>The CalmrBot <img src={logo} className="logo"/> can assist you in searching for what you are looking for on the page and will provide a small number of selected options. </p>
        <p>You can either click on the options or type in your selection.</p>
        <br></br>
        <p>Anyone can use the CalmrBot to search for information on our site.  </p>
        <p>If you would like to save any information you find you have the option to create an account. </p>
        <p>As an account holder you can access your list of saved items add comments or notes which may assist you tracking how you are feeling at any specific time using the resource.</p>
      </div>
    )
  }
};

export default About;
