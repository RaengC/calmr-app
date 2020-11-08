import React, { Component } from 'react';
import ArticleDisplay from './Articles/ArticleDisplay'
import SavedArticles from './Articles/SavedArticles'

class Test extends Component {
  render() {
    return (
      <div>
        <ArticleDisplay/>
        <SavedArticles/>
      </div>
    )
  }
}

export default Test
