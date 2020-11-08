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
      {this.state.savedArticles.flat().map((article) =>  <p><a href="#">{article.name}</a></p>)}
      </div>
    )
  }
}

export default SavedArticles