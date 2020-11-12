import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios'

const SERVER_URL = 'http://localhost:3000/users/9/articles.json'

class SavedArticles extends Component {
  constructor (props) {
    super (props)
    this.state = {
      articles: []
    }
    const fetchArticle = () => {
      axios.get(SERVER_URL).then((results) => {
        console.log(results.data)
        this.setState({articles: results.data})
      })
    }
    fetchArticle()

  }
  render () {
    return (
      <div>
        <h1>Saved Articles</h1>
          {this.state.articles.map((article) =>  <p><a target="_blank" href={article.link}>{article.name}</a>
          <ReactPlayer url={article.link} /></p>)}
      </div>
    )
  }
}

export default SavedArticles
