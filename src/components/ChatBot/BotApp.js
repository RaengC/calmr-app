import React from 'react';
import Chatbot from 'react-chatbot-kit';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

const getURL = () => {
  console.log("working")
}

function BotApp() {
  return (
    <div className="BotApp">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        onClick={getURL}
      />
    </div>
  );
}

export default BotApp;
