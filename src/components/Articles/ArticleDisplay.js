import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article'
import DisplayComments from './DisplayComments'
import ReactPlayer from 'react-player'

import OptionsMarkup from '../ChatBot/WidgetsList/OptionsMarkup';
import MeditationWidget from '../ChatBot/Widgets/MeditationWidget';
import config from '../ChatBot/config'

import './Articles.css';

const SERVER_URL = "http://localhost:3000/articles.json"

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

  savePodcast(response) {
    axios.post(SERVER_URL, {link: this.props.onSubmit, name: this.props.onSubmit.title_original})
  }


  render() {
    console.log("props", this.props.onSubmit)
    const image = this.props.onSubmit.thumbnail
    if (this.props.onSubmit.length == 0) {
      return false
    }
    return (
      <div className='player-wrapper'>
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
        <form>
          <input type="submit" value="Save Podcast" />
        </form>
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
