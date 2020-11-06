import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import SupportOptions from './SupportOptions/SupportOptions';
import LinkList from './LinkList/LinkList';

const botName = "CalmrBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hello, I'm ${botName}. What what would you like help with?`, {
      widget: "supportOptions",
    }),
  ],

  widgets: [
    {
      widgetName: "supportOptions",
      widgetFunc: (props) => <SupportOptions {...props} />
    },
    {
      widgetName: "meditationLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Guided Meditation",
            url:
              "https://www.tarabrach.com/?powerpress_pinw=11174-podcast",
            id: 1,
          },
          {
            text: "Loving This Life - Happiness",
            url: "https://www.tarabrach.com/?powerpress_pinw=2512-podcast",
            id: 2,
          },
          {
            text: "A Healing Breath",
            url: "https://www.tarabrach.com/?powerpress_pinw=2458-podcast",
            id: 3,
          },
        ]
      }
    }
  ],

};

export default config;
