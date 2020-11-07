import React, { Component } from 'react';

class ArticleDisplay extends Component {
  constructor() {
    super()
    this.state = {
      articleName: 'Yoga Nidra',
      articleBody: 'Around the room, faces relax, jaws soften, and soon snores start to rumble as the men drop deeper into relaxation.'
    }

  }
  render() {
    return (
      <div>
      <h1> {this.state.articleName} </h1>
      <p> {this.state.articleBody} </p>
      <button>Save {this.state.articleName} Article</button>
      </div>
    )
  }
}



export default ArticleDisplay;
