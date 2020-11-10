import React, { Component } from 'react';
import ArticleComments from './ArticleComments'
import DisplayComments from './DisplayComments'

import OptionsMarkup from '../ChatBot/WidgetsList/OptionsMarkup';
import MeditationWidget from '../ChatBot/Widgets/MeditationWidget';



class ArticleDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options,
      href: '',
      articleName: 'Yoga Nidra',
      articleBody: 'Around the room, faces relax, jaws soften, and soon snores start to rumble as the men drop deeper into relaxation.',
      allComments: ['hi', 'there']
    }
      this.handleComments = this.handleComments.bind(this)
      this.handleClick = this.handleClick.bind(this)
  }

  handleComments(comments) {
    this.setState({allComments: [... this.state.allComments, comments ]})
  }

  handleClick(href){
    this.setState({href: href})
    console.log('here')
  }

  render() {
    return (
      <div>
      <h1> {this.state.articleName} </h1>
      <p> {this.state.articleBody} </p>
      <button>Save {this.state.articleName} Article</button>
      <ArticleComments onSubmit={this.handleComments}/>
      <ul>
      {this.state.allComments.map((comment) =>
        <li>{comment}</li>
      )}
      </ul>

      <MeditationWidget onClick={this.handleClick} />

      </div>

    )
  }
}




export default ArticleDisplay;
