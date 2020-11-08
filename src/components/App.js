import React from 'react';

import BotApp from './ChatBot/BotApp';
import JournalLanding from './Journal/JournalLanding';
import ArticleDisplay from './Articles/ArticleDisplay';
import SavedArticles from './Articles/SavedArticles';
import Test from './Test'

function App() {
  return (
    <div className="App">
      <JournalLanding />
      <BotApp />
      <ArticleDisplay/>
      <SavedArticles/>

    </div>
  );
}

export default App;
