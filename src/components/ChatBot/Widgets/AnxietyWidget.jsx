import React, { Component } from 'react';

import OptionsMarkup from '../WidgetsList/OptionsMarkup';

class AnxietyWidget extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [
        {
          text: "Breathing to Stop Anxiety Attack",
          url: "https://youtu.be/vXZ5l7G6T2I",
          id: 1,
        },
        {
          text: "Meditation to help Anxiety & Stress",
          url: "https://youtu.be/Fpiw2hH-dlc",
          id: 2,
        },
        {
          text: "Meditation before sleep for Anxiety",
          url: "https://youtu.be/acLUWBuAvms",
          id: 3,
        },
      ]
    }
  }
  render(){
    return(
      <ul className="link-list"><OptionsMarkup options={this.state.options}/></ul>
    )
  }
}


export default AnxietyWidget;
