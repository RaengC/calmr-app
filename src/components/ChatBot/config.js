import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import SupportOptions from './SupportOptions/SupportOptions';

const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What what would you like help with?", {
      widget: "supportOptions",
    }),
  ],

  widgets: [
    {
      widgetName: "supportOptions",
      widgetFunc: (props) => <SupportOptions {...props} />
    }
  ],

};

export default config;
