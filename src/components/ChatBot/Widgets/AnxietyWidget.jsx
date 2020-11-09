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
      text: "Anxiety 2",
      url: "",
      id: 2,
    },
    {
      text: "Anxiety 3",
      url: "",
      id: 3,
    },
  ];

  return <ul className="link-list">{optionsMarkup(options)}</ul>;
}

export default AnxietyWidget;
