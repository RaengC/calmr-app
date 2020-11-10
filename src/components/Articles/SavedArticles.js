import React, { Component } from 'react';

class SavedArticles extends Component {
  constructor (props) {
    super (props)
    this.state = {
      savedArticles: [{name: '15 minute Meditation', date: 'Feb 20'}, {name: 'Yoga positions for anxiety', date: 'Jun 20'}]
    }
  }
  render () {
    return (
      <div>
        <h1>Your Saved Collection</h1>
          {this.state.savedArticles.flat().map((article) =>  <p><a href="https://en.wikipedia.org/wiki/Yoga_nidra">{article.name}</a></p>)}
      </div>
    )
  }
}

export default SavedArticles
