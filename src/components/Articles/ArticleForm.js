import React, { Component } from 'react';

// import Article from './Article'

class ArticleForm extends Component {
    constructor(){
        super();
        this.state = {
            query: ''
        }
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
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
    render() {
        return (
            <div>
             <h2> To search for a podcast enter your search criteria below</h2>
              <form onSubmit={ this._handleSubmit}>
                  <input type="search" placeholder="search podcast" required onInput={this._handleInput}/><br></br>
                  <input type="submit" value="Search"/>
              </form>

              // add calm music button here, with predetermined choice
            </div>
        )
    }
}


export default ArticleForm
