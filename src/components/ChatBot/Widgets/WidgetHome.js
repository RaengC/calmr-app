import React, {Component} from 'react'
import BreathingWidget from './BreathingWidget';

class WidgetHome extends Component {
  constructor() {
    super()
    this.state = {
      urlOnPage: ''
    }
    this._handleClick = this._handleClick.bind(this)
  }
_handleClick(e){
  console.log("here")
}
  render() {
    return(
        <BreathingWidget onClick={this._handleClick}/>
    )
  }
}

export default WidgetHome;a
