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
import SavedArticles from './Articles/SavedArticles';

import { ReactComponent as ButtonIcon } from "./Assets/lotus-flower.png";

import '../App.css';

function App() {
  const [showChatBot, toggleChatbot] = useState(true);

  return (
    <div className="App">
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/savedarticles">Saved Articles</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/savedarticles">
          <SavedArticlesLink />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>


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

  );
}

function Home() {
  return <div> <h2>Home</h2>;
  <JournalLanding />
  </div>
}

function About() {
  return <h2>About</h2>;
}

function SavedArticlesLink() {
  return <div> <h2>Saved Articles</h2>;
  <ArticleDisplay/>
  <SavedArticles/>
  </div>
}

export default App;
