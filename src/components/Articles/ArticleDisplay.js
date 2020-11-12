import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article'
import DisplayComments from './DisplayComments'
import ReactPlayer from 'react-player'
import ArticleForm from './ArticleForm'
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
    const image = this.props.onSubmit.thumbnail
    if (this.props.onSubmit.length == 0) {
      return false
    }
    return (
      <div className='player-wrapper'>
          <p>Title : { this.props.onSubmit.title_original } </p>
        <p>
        {this.props.onSubmit.title_original}
          <ReactPlayer
          className='react-player'
          url={this.props.onSubmit.audio}
          width='100%'
          height='100%'
          playing={false}
          controls={true}
          />
        <img src={image}></img>

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
