import React, { Component } from 'react';

import OptionsMarkup from '../WidgetsList/OptionsMarkup';

class MeditationWidget extends Component {
  constructor(props){
  super(props)
  this.state = {
      href: '',
      options: [{
      text: "Meditation Anywhere 5min",
      url:
        "https://youtu.be/inpok4MKVLM",
      id: 1
    },
    {
      text: "Loving This Life - Happiness",
      url: "https://www.tarabrach.com/?powerpress_pinw=2512-podcast",
      id: 2
    },
  {
      text: "5-min Meditation",
      url: "https://youtu.be/inpok4MKVLM",
      id: 3
    }]
  }

  }

  render() {
    return(
      <ul className="link-list"  >
      <OptionsMarkup yellow={true} options={this.state.options} handleClick={this.props.onClick}/></ul>
    )
  }
}
export default MeditationWidget;
