import React, { Component } from 'react'

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
      // this.props.onClick(this.state.href)
      event.preventDefault()
      if (this.props.handleClick) {
        this.props.handleClick(this.state.href)
      }

  }

    render(){
      if (!this.props.options){
        return ''
      }
      const onClick = this.props.handleClick;
      return(
        this.props.options.map((option) => (

        <li key={option.id} className="link-list">

          <a
            href={option.url}

            onClick={() => console.log("working", onClick)}
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
