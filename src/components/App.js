import React, {useState} from 'react';
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
      <JournalLanding />
      <ArticleDisplay/>
      <SavedArticles/>
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

export default App;
