import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import SupportOptions from './SupportOptions/SupportOptions';
import LinkList from './LinkList/LinkList';

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser';

const botName = "CalmrBot";

const config = {
  botName: botName,

  initialMessages: [
    createChatBotMessage(
      `Hi, I'm ${botName}. I'm here to help you nagivate this site.`
    ),
    createChatBotMessage(
      `What would you like help with?`,
      {
        delay: 600,
        widget: "supportOptions",
      }
    )
  ],

  state: {
    gist: "",
  },
  customComponents: {},

  widgets: [
    {
      widgetName: "supportOptions",
      widgetFunc: (props) => <SupportOptions {...props} />,
      mapStateToProps: ["gist"],
      props: {}
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
