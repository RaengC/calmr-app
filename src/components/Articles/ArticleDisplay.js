import React, { Component } from 'react';
import ArticleComments from './ArticleComments'
import DisplayComments from './DisplayComments'



class ArticleDisplay extends Component {
  constructor() {
    super()
    this.state = {

      articleName: 'Yoga Nidra',
      articleBody: 'Around the room, faces relax, jaws soften, and soon snores start to rumble as the men drop deeper into relaxation.',
      allComments: ['hi', 'there']
    }
      this._handleComments = this._handleComments.bind(this)
  }

  _handleComments(comments) {
    this.setState({allComments: [... this.state.allComments, comments ]})
  }
  render() {
    return (
      <div>
      <h1> {this.state.articleName} </h1>
      <p> {this.state.articleBody} </p>
      <button>Save {this.state.articleName} Article</button>
      <ArticleComments onSubmit={this._handleComments}/>
      <ul>
      {this.state.allComments.map((comment) =>
        <li>{comment}</li>
      )}
      </ul>

      </div>

    )
  }
}




export default ArticleDisplay;
