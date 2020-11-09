import React from 'react';

import optionsMarkup from '../WidgetsList/OptionsMarkup';

const MeditationWidget = (props) => {
  const options = [
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
      text: "5-min Meditation",
      url: "https://youtu.be/inpok4MKVLM",
      id: 3,
    },
  ];

  return <ul className="link-list">{optionsMarkup(options)}</ul>;
}
export default MeditationWidget;
