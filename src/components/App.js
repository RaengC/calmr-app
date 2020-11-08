import React from 'react';

import BotApp from './ChatBot/BotApp';
import JournalLanding from './Journal/JournalLanding';
import Test from './Test'

function App() {
  return (
    <div className="App">
      <JournalLanding />
      <BotApp />
      <Test />

    </div>
  );
}

export default App;
