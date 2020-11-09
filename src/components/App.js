import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Chatbot from 'react-chatbot-kit'
import { ConditionallyRender } from "react-util-kit";

import BotApp from './ChatBot/BotApp';
import JournalLanding from './Journal/JournalLanding';
import ArticleDisplay from './Articles/ArticleDisplay';
import SavedArticles from  './Articles/SavedArticles';
import Navigation from     './Navigation/Navigation';
import User from           './Users/User'
import About from './Journal/About'

import { ReactComponent as ButtonIcon } from "./Assets/lotus-flower.png";

import '../App.css';

function App() {
  const [showChatBot, toggleChatbot] = useState(true);

  return (
    <Router>
      <Navigation />
        <div className="App">
          <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/about">
                  <About />
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

              src={require('./Assets/lotus-flower.png')}
              onClick={() => toggleChatbot((prev) => !prev)} />
          </button>

        </div>
    </Router>
  );
}

// remove this once user data in files. Link directly above
function Login() {
  return <div><h2>Log in</h2>
  <User />
  </div>


};

export default App;
