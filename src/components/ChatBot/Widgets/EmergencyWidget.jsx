import React, { Component } from 'react';

import OptionsMarkup from '../WidgetsList/OptionsMarkup';

class EmergencyWidget extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [
        {
          text: "Lifeline",
          url: "https://www.lifeline.org.au/",
          id: 1,
        },
        {
          text: "Beyond Blue",
          url: "https://www.beyondblue.org.au/",
          id: 2,
        },
      ]
    }
  }
  render() {
    return (
      <ul className="link-list"><OptionsMarkup options={this.state.options}/></ul>
    )
  }
}

export default EmergencyWidget;
