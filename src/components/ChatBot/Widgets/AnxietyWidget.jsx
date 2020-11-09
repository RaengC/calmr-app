import React from 'react';

import optionsMarkup from '../WidgetsList/OptionsMarkup';

const AnxietyWidget = (props) => {
  const options = [
    {
      text: "Breathing to Stop Anxiety Attack",
      url: "https://youtu.be/vXZ5l7G6T2I",
      id: 1,
    },
    {
      text: "Meditation to help Anxiety & Stress",
      url: "https://youtu.be/Fpiw2hH-dlc",
      id: 2,
    },
    {
      text: "Meditation before sleep for Anxiety",
      url: "https://youtu.be/acLUWBuAvms",
      id: 3,
    },
  ];

  return <ul className="link-list">{optionsMarkup(options)}</ul>;
}

export default AnxietyWidget;
