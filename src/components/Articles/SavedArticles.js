import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios'

const SERVER_URL = 'https://calmr.herokuapp.com/users/4/articles.json'

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
          {this.state.articles.map((article) =>
            <div>
            <p>{article.name}</p>
          <ReactPlayer
          url={article.link}
          playing={false}
          controls={true}
          className="display-player"/>
          </div>)}
      </div>
    )
  }
}

export default SavedArticles
