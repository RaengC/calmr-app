import React, { Component } from 'react'
import './LinkList.css'

class OptionsMarkup extends Component {
  constructor(options) {
    super(options)
    this.state = {
      options: this.props.options,
      url: ''

    }
    this._handleClick = this._handleClick.bind(this)
    }

    _handleClick(event){
      this.setState({url: event.target.href})
    }

    render(){
      return(
        this.props.options.map((option) => (

        <li key={option.id} className="link-list">

          <a
            href={option.url}
            onClick={this._handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="link-list-item-url"
          >
            {option.text}
          </a>
        </li>
        )))
    }

}

export default OptionsMarkup;
