import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import SupportOptions from './SupportOptions/SupportOptions';
// import LinkList from './WidgetsList/LinkList';
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser';
import MindfullnessWidget from './Widgets/MindfullnessWidget';
import MeditationWidget from './Widgets/MeditationWidget';
import BreathingWidget from './Widgets/BreathingWidget';
import CreativeWidget from './Widgets/CreativeWidget';
import AnxietyWidget from './Widgets/AnxietyWidget';

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
      widgetFunc: (props) => <MeditationWidget {...props} />,
    },
    {
      widgetName: "mindfullnessLinks",
      widgetFunc: (props) => <MindfullnessWidget {...props} />,
    },
    {
      widgetName: "breathing",
      widgetFunc: (props) => <BreathingWidget {...props} />,
    },
    {
      widgetName: "creative",
      widgetFunc: (props) => <CreativeWidget {...props} />,
    },
    {
      widgetName: "anxiety",
      widgetFunc: (props) => <AnxietyWidget {...props} />,
    },
  ],

};

export default config;
