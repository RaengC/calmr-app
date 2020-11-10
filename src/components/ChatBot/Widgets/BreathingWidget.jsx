import React, { Component } from 'react';

import OptionsMarkup from '../WidgetsList/OptionsMarkup';


class BreathingWidget extends Component {
  constructor(props){
  super(props)
  this.state = {
    options: [{
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
    }]
  }
  }
  render(){
    return (
      <ul className="link-list"><OptionsMarkup options={this.state.options}/></ul>
    )
  }
}

export default BreathingWidget;
