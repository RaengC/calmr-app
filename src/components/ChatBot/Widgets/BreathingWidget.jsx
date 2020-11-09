import React, { Component } from 'react';

const options = [
  {
    text: "Breathing to Stop Anxiety Attack",
    url: "https://youtu.be/vXZ5l7G6T2I",
    id: 1,
  },
  {
    text: "Moving Mandala Meditation",
    url: "https://youtu.be/qZLO2EE_oKE",
    id: 2,
  },
  {
    text: "Solfeggio Frequencies with visuals",
    url: "https://youtu.be/goyZbut_KFY",
    id: 3,
  },
  {
    text: "Mindful Breathing",
    url: "https://youtu.be/nmFUDkj1Aq0",
    id: 4,
  },
];


class BreathingWidget extends Component {
  constructor(){
    super()
    this.state = {
      url: ''
    }

    this._handleClick = this._handleClick.bind(this)
  }
  _handleClick(event){
    let url = event.target.href
    this.setState({url: event.target.href})
  }
  _on
render() {
      return(
        <div>
        {options.map((option) => (
    <li className="link-list">
      <a
        href={option.url}
        value={option.url}
        onClick={this._handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {option.text}
      </a>
    </li>
  ))}

  </div>
)
}
}



export default BreathingWidget;
