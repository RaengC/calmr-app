import React, { Component } from 'react';

import OptionsMarkup from '../WidgetsList/OptionsMarkup';

class MindfullnessWidget extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [
        {
          text: "Mindfulness Meditation 10min",
          url:
            "https://youtu.be/syx3a1_LeFo",
          id: 1,
        },
        {
          text: "Body Scan 15min",
          url:
            "https://youtu.be/T0nuKBVQS7M",
          id: 2,
        },
        {
          text: "Why Mindfullness is a superpower",
          url:
            "https://youtu.be/w6T02g5hnT4",
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
export default MindfullnessWidget;
