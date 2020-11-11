import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article'
import DisplayComments from './DisplayComments'

import OptionsMarkup from '../ChatBot/WidgetsList/OptionsMarkup';
import MeditationWidget from '../ChatBot/Widgets/MeditationWidget';
import config from '../ChatBot/config'

import './Articles.css';

class ArticleDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      href: '',
      searchResults: [],
    }
    this.displayResults = this.displayResults.bind(this)
  }

  displayResults(results) {
    console.log(results)
  }

  render() {
    return (
      <div>
      {this.props.searchResults.map((result) => (
        console.log(result)
      ))
      }
      </div>

    )
  }
}




export default ArticleDisplay;
