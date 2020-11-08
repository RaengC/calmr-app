import React, { Component } from 'react';

class ArticleComments extends Component {
  constructor() {
    super ()
    this.state = {
      currentCommentText: [],
      allCommentsText: []

    }
    this._onSubmit = this._onSubmit.bind(this)
    this._onInput = this._onInput.bind(this)
  }

  _onInput(event) {
    this.setState({currentCommentText: event.target.value})
  }

  _onSubmit(event){
  event.preventDefault();
  this.props.onSubmit(this.state.currentCommentText)
  }


  render () {
    return (
      <div>
      <form onSubmit={this._onSubmit}>
      <textarea onInput={this._onInput}></textarea>
      <input type="submit" value="save comment"/>
      </form>
      </div>
    )
  }
}


export default ArticleComments
