import React, { Component } from 'react';
import unirest from 'unirest'
import Article from './Article'
import ArticleDisplay from './ArticleDisplay'
import ReactPlayer from 'react-player'

class ArticleForm extends Component {
    constructor(){
        super();
        this.state = {
            query: '',
            audio: ''

        }
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
        // this._handleOnClick = this._handleOnClick.bind(this)

    }

    _handleSubmit(event){
        event.preventDefault();
        // what are we searching for
        // go and get images . should show at page
        console.log('about to search for', this.state.query);
        this.props.onSubmit( this.state.query ); //call the event handler provied by parents
    }

    _handleInput(event){
        // console.log(event.target.value);
        this.setState({query: event.target.value});
    }

    // function
    // _handleOnClick(event){
        // console.log("work");
        listenNotes_calmr = async (query) => {
        const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=calm&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
          .header('X-ListenAPI-Key', 'c553d29fdd154bc3a22678b4f2f3350d').then((results) => {
            console.log("JSON", results.toJSON())
            results = results.toJSON()
            results.body.results.map((result) => (
            // console.log('result', result)
            this.setState({audio: result.audio})
            ))
          })
        }
    // }

    render()   {
        return (
            <div>
             <h2> To search for a podcast enter your search criteria below</h2>
              <form onSubmit={ this._handleSubmit}>
                  <input type="search" placeholder="search podcast" required onInput={this._handleInput}/><br></br>
                  <input type="submit" value="Search"/>
              </form>
              <button onClick = { this.listenNotes_calmr }>Calmr Music</button>
              <ReactPlayer
              className='react-player'
              url={this.state.audio}
              width='100%'
              height='100%'
              playing={false}
              controls={true}
              />
            </div>
        )
    }
}


export default ArticleForm
