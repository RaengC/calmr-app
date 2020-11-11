import React, { Component } from 'react'
import './LinkList.css'

class OptionsMarkup extends Component {
  constructor(options) {
    super(options)
    this.state = {
      options: this.props.options,

    }

    }



    render(){
      return(
        this.props.options.map((option) => (

        <li key={option.id} className="link-list">

          <a
            href={option.url}
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
