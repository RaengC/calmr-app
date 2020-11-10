import React, {Component} from 'react'
import OptionsMarkUp from './OptionsMarkup';

class WidgetHome extends Component {
  constructor() {
    super()
    this.state = {
      urlOnPage: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick(url){
  console.log("here")
}

render() {
    return(
      <OptionsMarkUp onClick={this.handleClick}/>
    )
  }
}

export default WidgetHome;
