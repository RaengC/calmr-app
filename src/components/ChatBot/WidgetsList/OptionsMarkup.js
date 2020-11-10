import React, { Component } from 'react'
import './LinkList.css'

class OptionsMarkup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options,
      href: ''

    }
    this._handleMouseDown = this._handleMouseDown.bind(this)
    this._handleClick = this._handleClick.bind(this)
    }

    _handleMouseDown(event) {
        this.setState({href: event.target.href})
    }

    _handleClick(event) {
      event.preventDefault()
      if (this.props.handleClick) {
        this.props.handleClick(this.state.href)
      }


  }

    render(){
      console.log(this.props)
      if (!this.props.options){
        return ''
      }
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
