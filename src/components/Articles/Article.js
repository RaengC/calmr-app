import React, {Component} from 'react'

import ArticleDisplay from './ArticleDisplay'
import ArticleForm from './ArticleForm'

class Article extends Component {

// api call there - podcast api

  render() {
    return (
        <div>
      <ArticleDisplay />
      <ArticleForm />
      </div>
    )
  }
}

export default Article
