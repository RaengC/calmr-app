import React from 'react';

import optionsMarkup from '../WidgetsList/OptionsMarkup';

const MindfullnessWidget = (props) => {
  const options = [
    {
      text: "Mindfulness Meditation 10min",
      url:
        "https://youtu.be/syx3a1_LeFo",
      id: 1,
    },
    {
      text: "Body Scan 15min",
      url:
        "https://youtu.be/T0nuKBVQS7M",
      id: 2,
    },
    {
      text: "Why Mindfullness is a superpower",
      url:
        "https://youtu.be/w6T02g5hnT4",
      id: 3,
    },
  ];

  return <ul className="link-list">{optionsMarkup(options)}</ul>;

}
export default MindfullnessWidget;
