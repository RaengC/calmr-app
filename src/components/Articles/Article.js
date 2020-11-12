import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import ArticleDisplay from './ArticleDisplay'
import ArticleForm from './ArticleForm'
import unirest from 'unirest'

class Article extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      searchResults: []
    }
    this.listenNotes = this.listenNotes.bind(this)
    this.passResultsToDisplay = this.passResultsToDisplay.bind(this)
  }

    listenNotes = async (query) => {
      this.setState({query: query})
      console.log(this.state.query)
    const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=${query}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
      .header('X-ListenAPI-Key', 'c553d29fdd154bc3a22678b4f2f3350d').then((results) => {
        console.log("JSON", results.toJSON())
        results = results.toJSON()
        results.body.results.map((result) => (
        this.setState({searchResults: result})
      ))
      })
    }

    // new function to onClick to calming music

    passResultsToDisplay(props) {
      this.props.onSubmit(this.state.searchResults)
    }

  render() {

    return (
        <div className="container">
        <ArticleForm
          onSubmit={this.listenNotes}
          />
        <ArticleDisplay
          onSubmit={this.state.searchResults}
          />
      </div>
    )
  }
}

export default Article
