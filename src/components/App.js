import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import { ConditionallyRender } from "react-util-kit";
import WidgetHome from './ChatBot/WidgetsList/WidgetHome'

import BotApp from './ChatBot/BotApp';
import JournalLanding from './Journal/JournalLanding';
import ArticleDisplay from './Articles/ArticleDisplay';
import SavedArticles from  './Articles/SavedArticles';
import Navigation from     './Navigation/Navigation';
import Registration from   './Users/auth/Registration'
import User from './Users/User'
import About from './Journal/About'

import logo from "./Assets/lotus-flower.png";

import '../App.css';

function App() {

  const [showChatBot, toggleChatbot] = useState(false);

  // const logo = require('./Assets/lotus-flower.png');
  return (
    <Router>
      <Navigation />
        <div className="container">

          <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login">
                  <User />
                </Route>
                <Route path="/createAccount">
                  <Registration />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/articleDisplay">
                  <ArticleDisplay />
                </Route>
                <Route path="/savedarticles">
                  <SavedArticles />
                </Route>
                <Route path="/">
                  <JournalLanding />
                </Route>
              </Switch>
          </div>

          <div className="app-chatbot-container">
            <ConditionallyRender
              ifTrue={showChatBot}
              show={ <BotApp /> }
            />
          </div>

          <button
            className="app-chatbot-button">
            <img
              className="logo"
              src={logo}
              onClick={() => toggleChatbot((prev) => !prev)} />
          </button>

        </div>
    </Router>
  );
}


export default App;
