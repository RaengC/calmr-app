import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About Calmr</h2>
          <p>Calmr is a group project designed to facilitate team work and group learning in the General Assembly Software Engineering Immersive course. </p>
          <p>The project was designed and constructed by the students involved, <a href="https://github.com/brittanylcrocker" target="_blank">Brittany Crocker,</a> <a href="https://github.com/Giti-mafakheri" target="_blank">Giti Mafakheri</a>,  <a href="https://github.com/lightgreener" target="_blank">Henry Zhang</a> and <a href="https://github.com/RaengC" target="_blank">Raeng Castagna.</a>  </p>
          <p>Calmr was created with React and Ruby on Rails</p>
        <br></br>
        <h3>Emergency Assistance</h3>
          <p>If you require emergency assistance please contact <a href="https://www.beyondblue.org.au/" target="_blank">BeyondBlue</a> or <a href="https://www.lifeline.org.au/" target="_blank">LifeLine</a> </p>
        <br></br>
        <h3>Legal Disclaimers</h3>
          <p>Our API key for podcasts was obtained through <a href="https://www.listennotes.com/" target="_blank">ListenNotes</a> </p>
          <p>Videos for our CalmrBot are obtained through <a href="https://www.youtube.com/" target="_blank">YouTube</a> </p>
      </div>
    )
  }
}

export default About;
