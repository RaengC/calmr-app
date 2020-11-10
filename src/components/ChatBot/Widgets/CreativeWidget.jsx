import React, { Component } from 'react';

import OptionsMarkup from '../WidgetsList/OptionsMarkup';

class CreativeWidget extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: [{
        text: "Unleash Your Natural Creativity",
        url: "https://youtu.be/yjYrxcGSWX4",
        id: 1,
      },
      {
        text: "Your elusive creative genuius",
        url: "https://youtu.be/86x-u-tz0MA",
        id: 2,
      },
      {
        text: "Where does creativity hide?",
        url: "https://youtu.be/8D0pwe4vaQo",
        id: 3,
      },
      {
        text: "The theory of creativity",
        url: "https://youtu.be/_8MwiGYzlyg",
        id: 4,
      }]
    }
  }
  render(){
    return(
      <ul className="link-list"><OptionsMarkup options={this.state.options}/></ul>
    )
  }
}
export default CreativeWidget;
