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
    console.log("props", this.props.onSubmit)
    if (this.props.onSubmit.length == 0) {
      return false
    }
    return (
      <div>
        <p>
        {this.props.onSubmit.audio}
        {this.props.onSubmit.podcast.title_original}
        </p>
      </div>

    )
  }
}

//
// {this.props.onSubmit.map((result) =>
// <p>{result}</p>)
// {console.log('props2', this.props.onSubmit)}
// }



export default ArticleDisplay;
